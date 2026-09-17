/** Evidence Grid: hukuki metinler eski siteden birebir taşındı; yapı korunur, içerik değiştirilmez. */
import { Link, useRoute } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageFrame } from "@/components/SiteShell";
import hukukiMetinler from "@/lib/hukukiMetinler.json";

type Blok = { tip: string; metin: string };
type Sayfa = { baslik: string; ozet: string; bloklar: Blok[] };

const metinler = hukukiMetinler as Record<string, Sayfa>;

export const hukukiSayfalar = [
  { slug: "kvkk", ad: "KVKK Aydınlatma Metni" },
  { slug: "gizlilik", ad: "Gizlilik Politikası" },
  { slug: "iade", ad: "İade Politikası" },
  { slug: "sorumluluk", ad: "Sorumluluk Reddi" },
  // 17 Eyl 2026 — abonelikli uygulamalar için Apple 3.1.2 kullanım koşulları bağlantısı ister (PALETRA).
  { slug: "kullanim-kosullari", ad: "Kullanım Koşulları (EULA)" },
  // 23 Agu 2026 — Google Play, hesap olusturan uygulamalar icin AYRI bir
  // hesap silme sayfasi zorunlu tutuyor. store/02_veri_guvenligi.md bunu
  // 2026 Temmuz'da not etmis ama sayfa hic yazilmamisti; /tonsora/hesap-sil
  // adresi vercel.json'daki catch-all yuzunden urun sayfasina dusuyordu.
  { slug: "hesap-sil", ad: "Hesap ve Veri Silme" },
];

/** Ardışık <li> bloklarını tek bir listede toplar. */
function grupla(bloklar: Blok[]) {
  const cikti: { tip: string; metin?: string; maddeler?: string[] }[] = [];
  for (const blok of bloklar) {
    if (blok.tip === "li") {
      const son = cikti[cikti.length - 1];
      if (son?.tip === "liste") son.maddeler!.push(blok.metin);
      else cikti.push({ tip: "liste", maddeler: [blok.metin] });
    } else {
      cikti.push({ tip: blok.tip, metin: blok.metin });
    }
  }
  return cikti;
}

export default function HukukiSayfa() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug ?? "";
  const sayfa = metinler[slug];

  if (!sayfa) {
    return (
      <PageFrame title="Sayfa bulunamadı" description="Aradığınız hukuki metin bulunamadı.">
        <section className="not-found">
          <h1>Bu sayfa bulunamadı.</h1>
          <Link href="/" className="route-link">Ana sayfaya dön <ArrowUpRight size={18} /></Link>
        </section>
      </PageFrame>
    );
  }

  const icerik = grupla(sayfa.bloklar);

  return (
    <PageFrame title={sayfa.baslik} description={sayfa.ozet}>
      <section className="hukuki-hero">
        <p className="eyebrow">YASAL METİN</p>
        <h1>{sayfa.baslik}</h1>
        <p className="hukuki-ozet">{sayfa.ozet}</p>
      </section>

      <section className="hukuki-govde">
        <aside className="hukuki-yan">
          <span>DİĞER METİNLER</span>
          <i />
          {hukukiSayfalar
            .filter((s) => s.slug !== slug)
            .map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>{s.ad}</Link>
            ))}
        </aside>
        <article className="hukuki-icerik">
          {icerik.map((blok, i) => {
            if (blok.tip === "liste") {
              return (
                <ul key={i}>
                  {blok.maddeler!.map((madde, j) => <li key={j}>{madde}</li>)}
                </ul>
              );
            }
            if (blok.tip === "h1" || blok.tip === "h2") return <h2 key={i}>{blok.metin}</h2>;
            if (blok.tip === "h3" || blok.tip === "h4") return <h3 key={i}>{blok.metin}</h3>;
            return <p key={i}>{blok.metin}</p>;
          })}
        </article>
      </section>
    </PageFrame>
  );
}
