/**
 * Her rota için gerçek HTML üretir.
 *
 * Neden: site bir React SPA. Sunucu boş <div id="root"> gönderiyor, içeriği
 * tarayıcı çiziyor. Arama motorları bunu çoğu zaman okuyabiliyor ama garanti
 * değil — 38 TR + 12 EN blog yazısını buna bırakmak riskli.
 *
 * Ne yapar: dist/index.html'i şablon alır, her rotayı sunucuda render eder,
 * <div id="root"> içine gerçek içeriği yazar, başlık/açıklama/canonical'ı
 * doğru değerlerle doldurup dist/<rota>/index.html olarak kaydeder.
 *
 * Vercel sırası: redirects -> filesystem -> rewrites. Statik dosya önce
 * kontrol edildiği için bu dosyalar SPA fallback'ten önce servis edilir.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(KOK, "dist");
const SITE = "https://www.nechhrobotics.com";

// Windows: mutlak yol ESM icin file:// olmali.
const { render } = await import(pathToFileURL(path.join(KOK, "dist-ssr", "entry-server.js")).href);

const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf-8");
const yollar = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, ""))
  .map((y) => (y === "" ? "/" : y));

const sablon = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

// 4 Eki 2026'da yakalandi: sablon dist/index.html'den okunuyor ve bu dosya ayni scriptin
// "/" ciktisiyla UZERINE YAZILIYOR. Dolayisiyla `npm run prerender` tek basina ikinci kez
// kosulursa sablon artik bos bir kabuk degil, prerender edilmis bir sayfadir: icerik iki kez
// gomulur ve canonical/baslik bozulur. Bu yuzden sablonun temiz oldugu DOGRULANIR.
if (!sablon.includes('<div id="root"></div>') || sablon.includes('rel="canonical"')) {
  console.error("prerender: dist/index.html temiz bir sablon degil (onceki prerender ciktisi).");
  console.error("  Cozum: tam derleme kosulmali -> npm run build");
  process.exit(1);
}

function kacir(x) {
  return String(x).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

let yazilan = 0;
let hatali = 0;

for (const yol of yollar) {
  try {
    const { html, title, description } = render(yol);

    const kanonik = yol === "/" ? SITE : `${SITE}${yol.replace(/\/$/, "")}`;
    const dil = yol.startsWith("/en") ? "en" : "tr";

    let sayfa = sablon
      .replace('<html lang="tr">', `<html lang="${dil}">`)
      .replace(/<title>[^<]*<\/title>/, `<title>${kacir(title || "Nechh Robotics")}</title>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (description) {
      sayfa = sayfa.replace(
        /<meta name="description" content="[^"]*"\s*\/>/,
        `<meta name="description" content="${kacir(description)}" />`,
      );
    }
    sayfa = sayfa.replace("</head>", `  <link rel="canonical" href="${kanonik}" />\n  </head>`);

    const hedef =
      yol === "/" ? path.join(DIST, "index.html") : path.join(DIST, yol, "index.html");
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    fs.writeFileSync(hedef, sayfa, "utf-8");
    yazilan++;
  } catch (hata) {
    hatali++;
    console.error(`  ✗ ${yol}: ${hata.message}`);
  }
}

// 4 Eki 2026 soft-404 duzeltmesi: Vercel, eslesmeyen yol icin dist/404.html'i 404 statusuyle
// servis eder. Bu dosya /404 rotasindan uretilir; canonical TASIMAZ, robots noindex tasir.
{
  const { html, title } = render("/404");
  let sayfa = sablon
    .replace(/<title>[^<]*<\/title>/, `<title>${kacir(title || "Sayfa bulunamadı")}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace("</head>", '  <meta name="robots" content="noindex,follow" />\n  </head>');
  // Sablondan gelmis olabilecek canonical SILINIR: olmayan sayfa hicbir adresi temsil etmez.
  sayfa = sayfa.replace(/\s*<link rel="canonical"[^>]*>/g, "");
  if (sayfa.includes('rel="canonical"')) {
    throw new Error("404.html canonical tasiyor: soft-404 duzeltmesi bozulmus");
  }
  fs.writeFileSync(path.join(DIST, "404.html"), sayfa, "utf-8");
  console.log("prerender: 404.html yazıldı (canonical yok, robots noindex)");
}

console.log(`\nprerender: ${yazilan} sayfa yazıldı, ${hatali} hata`);
if (hatali > 0) process.exit(1);
