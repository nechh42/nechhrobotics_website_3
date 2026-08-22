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

console.log(`\nprerender: ${yazilan} sayfa yazıldı, ${hatali} hata`);
if (hatali > 0) process.exit(1);
