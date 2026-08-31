/**
 * Ürün sayfalarındaki mağaza indirme rozetleri.
 *
 * 🔴 31 Ağustos 2026 — NEDEN VAR:
 * Site, uygulamaları olan ürünlerde hiçbir mağaza bağlantısı vermiyordu;
 * yalnızca "ürünü incele" diyordu. Aynı gün helialoop.com altbilgisinde
 * Android'in "Yakında" göründüğü ve uygulamanın aylardır yayında olduğu
 * ortaya çıktı — ziyaretçi siteye bakıp "daha çıkmamış" diyerek gidiyordu.
 *
 * 🔴 KURAL: Burada YALNIZCA gerçekten yayında olan mağaza gösterilir.
 * Olmayan mağaza için rozet KONULMAZ; "yakında" da yazılmaz. Bir ürün
 * mağazaya girdiğinde `site.ts` içindeki `stores` alanına eklenir.
 * (31 Ağu ölçümü: HeliaLoop ve JuriLoop yalnızca Google Play'de,
 *  App Store'da yoklar; TONSORA her ikisinde de var.)
 */
import type { Product } from "@/lib/site";

type Props = {
  stores: Product["stores"];
  locale?: "tr" | "en";
};

const METIN = {
  tr: { baslik: "Mobil uygulama", play: "Google Play", apple: "App Store" },
  en: { baslik: "Mobile app", play: "Google Play", apple: "App Store" },
};

export function MagazaRozetleri({ stores, locale = "tr" }: Props) {
  if (!stores?.play && !stores?.appStore) return null;
  const t = METIN[locale];

  return (
    <div className="magaza-rozetleri">
      <span className="magaza-rozetleri-baslik">{t.baslik}</span>
      <div className="magaza-rozetleri-liste">
        {stores.appStore && (
          <a
            href={stores.appStore}
            target="_blank"
            rel="noreferrer"
            className="magaza-rozet"
            aria-label={`${t.apple} — ${locale === "tr" ? "indir" : "download"}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>{t.apple}</span>
          </a>
        )}
        {stores.play && (
          <a
            href={stores.play}
            target="_blank"
            rel="noreferrer"
            className="magaza-rozet"
            aria-label={`${t.play} — ${locale === "tr" ? "indir" : "download"}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.65.2.97.09l11.7-6.72-2.58-2.59-10.09 9.22zM.41 1.12C.15 1.42 0 1.88 0 2.46v19.08c0 .58.15 1.04.41 1.34l.07.07 10.7-10.7v-.24L.48 1.05l-.07.07zM22.1 10.39l-3.04-1.75-2.87 2.87 2.87 2.87 3.06-1.77c.87-.5.87-1.32-.02-1.82zM3.18.24L13.27 9.5l-2.58 2.58L1 2.36c-.3-.27-.5-.08-.3.07z" />
            </svg>
            <span>{t.play}</span>
          </a>
        )}
      </div>
    </div>
  );
}
