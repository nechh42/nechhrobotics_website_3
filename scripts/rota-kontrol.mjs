/**
 * ROTA KONTROLU — Vercel'in cozumleme sirasini yerelde taklit eder ve her rotanin
 * hâlâ bir sayfaya duştugunu dogrular.
 *
 * NEDEN: 4 Eki 2026'da soft-404 duzeltmesi icin `vercel.json` icindeki catch-all rewrite
 * (`/(.*) -> /index.html`) kaldirildi; yerine yalnizca DINAMIK rota aileleri yazildi. Boylece
 * olmayan yollar gercek 404 aliyor. Ama bu degisiklik yanlis yapilirsa MEVCUT bir sayfa da
 * 404'e duser — yani SEO'yu duzeltirken siteyi kirabilirdik. Bu script onu olcer.
 *
 * Cozumleme sirasi (Vercel): redirects -> filesystem -> rewrites -> 404.
 *   filesystem : dist/<yol>/index.html ya da dist/<yol>
 *   rewrites   : vercel.json icindeki kaynak kaliplari
 *   404        : dist/404.html (404 statusu)
 *
 * Kullanim: node scripts/rota-kontrol.mjs
 * Cikis kodu 1: bir rota 404'e duser ya da olmayan yol 404 ALMAZ.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(KOK, "dist");
const vercel = JSON.parse(fs.readFileSync(path.join(KOK, "vercel.json"), "utf-8"));

/** Vercel kaynak kalibini (`/blog/:slug*`) duzenli ifadeye cevirir. */
function kalipRegex(kaynak) {
  const govde = kaynak
    .replace(/[.+^${}()|[\]\\]/g, "\\$&")
    .replace(/\/:([A-Za-z0-9_]+)\*/g, "(?:/(?:.*))?")
    .replace(/:([A-Za-z0-9_]+)\*/g, "(?:.*)")
    .replace(/:([A-Za-z0-9_]+)/g, "[^/]+");
  return new RegExp(`^${govde}/?$`);
}

const yonlendirmeler = (vercel.redirects || []).map((r) => ({ ...r, re: kalipRegex(r.source) }));
const yenidenYazmalar = (vercel.rewrites || []).map((r) => ({ ...r, re: kalipRegex(r.source) }));

function coz(yol) {
  for (const y of yonlendirmeler) {
    if (y.re.test(yol)) return { tur: "redirect", hedef: y.destination };
  }
  const dosya = path.join(DIST, yol);
  if (fs.existsSync(path.join(dosya, "index.html"))) return { tur: "filesystem", hedef: `${yol}/index.html` };
  if (yol !== "/" && fs.existsSync(dosya) && fs.statSync(dosya).isFile()) return { tur: "filesystem", hedef: yol };
  if (yol === "/" && fs.existsSync(path.join(DIST, "index.html"))) return { tur: "filesystem", hedef: "/index.html" };
  for (const r of yenidenYazmalar) {
    if (r.re.test(yol)) return { tur: "rewrite", hedef: r.destination };
  }
  return { tur: "404", hedef: "/404.html" };
}

// Uygulamadaki rotalar: App.tsx'ten okunur (elle liste tutmak eskir).
const app = fs.readFileSync(path.join(KOK, "client/src/App.tsx"), "utf-8");
const rotalar = [...app.matchAll(/<Route path="([^"]+)"/g)].map((m) => m[1]);

// Dinamik rotalar icin GERCEK slug'lar sitemap'ten alinir (uydurma slug test etmez).
const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf-8");
const sitemapYollari = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace("https://www.nechhrobotics.com", "")).map((y) => y || "/");

function ornekYol(rota) {
  if (!rota.includes(":")) return [rota];
  const onek = rota.slice(0, rota.indexOf("/:"));
  const adaylar = sitemapYollari.filter((y) => y.startsWith(`${onek}/`) && y !== onek);
  return adaylar.length ? [adaylar[0]] : [];
}

const hatalar = [];
let olculen = 0;
const atlanan = [];

// /404 rotasinin KENDISI 404 statusu almali: dogru davranis budur, hata degildir.
const beklenenKendisi404 = new Set(["/404"]);

for (const rota of rotalar) {
  if (beklenenKendisi404.has(rota)) continue;
  const yollar = ornekYol(rota);
  if (!yollar.length) {
    atlanan.push(rota);
    continue;
  }
  for (const yol of yollar) {
    const sonuc = coz(yol);
    olculen++;
    if (sonuc.tur === "404") {
      hatalar.push(`MEVCUT ROTA 404'E DUSTU: ${rota} (ornek: ${yol})`);
    }
  }
}

// Sitemap'teki her adres de bir sayfaya dusmeli (112 adres).
for (const yol of sitemapYollari) {
  const sonuc = coz(yol);
  olculen++;
  if (sonuc.tur === "404") hatalar.push(`SITEMAP ADRESI 404'E DUSTU: ${yol}`);
}

// Olmayan yollar GERCEKTEN 404 almali (soft-404 duzeltmesinin asil amaci).
const olmayanlar = ["/projeler", "/olmayan-sayfa", "/cozumler", "/blog/olmayan-yazi-xyz",
                    "/en/olmayan", "/magaza/olmayan-paket", "/wp-admin", "/.git/config"];
const beklenen404 = ["/projeler", "/olmayan-sayfa", "/wp-admin", "/.git/config", "/en/olmayan"];
for (const yol of olmayanlar) {
  const sonuc = coz(yol);
  const var_mi = sitemapYollari.includes(yol);
  if (beklenen404.includes(yol) && sonuc.tur !== "404") {
    hatalar.push(`OLMAYAN YOL 404 ALMADI: ${yol} -> ${sonuc.tur} (${sonuc.hedef})`);
  }
  if (var_mi && sonuc.tur === "404") hatalar.push(`sitemap'te olan yol 404 aldi: ${yol}`);
}

// Dinamik fallback kabugu (spa.html) canonical TASIMAMALI ve noindex TASIMALI: bilinmeyen
// slug anasayfanin kopyasi gibi gorunmemeli.
{
  const kabuk = path.join(DIST, "spa.html");
  if (!fs.existsSync(kabuk)) {
    hatalar.push("dist/spa.html yok: dinamik rota fallback'i eksik");
  } else {
    const icerik = fs.readFileSync(kabuk, "utf-8");
    if (icerik.includes('rel="canonical"')) hatalar.push("spa.html canonical tasiyor (anasayfa kopyasi riski)");
    if (!/name="robots"[^>]*noindex/.test(icerik)) hatalar.push("spa.html robots noindex tasimiyor");
    if (!icerik.includes('<div id="root"></div>')) hatalar.push("spa.html prerender edilmis icerik tasiyor");
  }
  for (const r of yenidenYazmalar) {
    if (r.destination !== "/spa.html") {
      hatalar.push(`rewrite hedefi /spa.html degil: ${r.source} -> ${r.destination}`);
    }
  }
}

// 404.html bulunmali, canonical TASIMAMALI, noindex TASIMALI.
const dosya404 = path.join(DIST, "404.html");
if (!fs.existsSync(dosya404)) {
  hatalar.push("dist/404.html yok: Vercel eslesmeyen yol icin sayfa bulamaz");
} else {
  const icerik = fs.readFileSync(dosya404, "utf-8");
  if (icerik.includes('rel="canonical"')) hatalar.push("404.html canonical tasiyor");
  if (!/name="robots"[^>]*noindex/.test(icerik)) hatalar.push("404.html robots noindex tasimiyor");
}

console.log(`rota kontrolu: ${rotalar.length} rota tanimi, ${sitemapYollari.length} sitemap adresi, ` +
            `${olculen} cozumleme olculdu.`);
if (atlanan.length) {
  console.log(`  not: ${atlanan.length} dinamik rota icin sitemap'te ornek yok, atlandi: ${atlanan.join(", ")}`);
}
if (hatalar.length) {
  console.error("\n🔴 HATA:");
  for (const h of hatalar) console.error("  " + h);
  process.exit(1);
}
console.log("PASS tum rotalar bir sayfaya dusuyor; olmayan yollar 404 aliyor; 404.html dogru.");
