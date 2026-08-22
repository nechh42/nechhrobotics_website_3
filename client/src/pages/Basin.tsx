/** Evidence Grid: basın bültenleri eski siteden taşındı; PDF sürümleri de indirilebilir durumda. */
import { FileText } from "lucide-react";
import { PageFrame } from "@/components/SiteShell";
import basinVerisi from "@/lib/basin.json";

type Bulten = { baslik: string; pdf: string; bloklar: { tip: string; metin: string }[] };

const bultenler = basinVerisi as Bulten[];

export default function Basin() {
  return (
    <PageFrame
      title="Basında Biz"
      description="Nechh Robotics ürünlerine ilişkin basın bültenleri ve kurumsal duyurular."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>PRESS / 01</span><i /></div>
        <div>
          <p className="eyebrow">BASIN</p>
          <h1>Duyurular ve<br /><em>basın bültenleri.</em></h1>
        </div>
        <p>
          Ürün lansmanlarına ilişkin bültenlerin tam metni aşağıdadır.
          PDF sürümleri de indirilebilir.
        </p>
      </section>

      {bultenler.map((bulten) => (
        <section className="basin-bulten" key={bulten.baslik}>
          <div className="basin-yan">
            <a href={bulten.pdf} target="_blank" rel="noreferrer" className="basin-pdf">
              <FileText size={17} /> PDF sürümü
            </a>
          </div>
          <article className="hukuki-icerik">
            <h2>{bulten.baslik}</h2>
            {bulten.bloklar.map((blok, i) => {
              if (blok.tip === "li") return <li key={i}>{blok.metin}</li>;
              if (blok.tip === "h2" || blok.tip === "h3") return <h3 key={i}>{blok.metin}</h3>;
              return <p key={i}>{blok.metin}</p>;
            })}
          </article>
        </section>
      ))}
    </PageFrame>
  );
}
