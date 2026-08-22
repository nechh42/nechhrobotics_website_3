/** Evidence Grid: sorular eski siteden taşındı; açılır-kapanır yapı klavyeyle de çalışır. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import sssVerisi from "@/lib/sss.json";

type Kategori = { baslik: string; sorular: { soru: string; cevap: string }[] };

const kategoriler = sssVerisi as Kategori[];

export default function SSS() {
  return (
    <PageFrame
      title="Sıkça Sorulan Sorular"
      description="Nechh Robotics ürünleri, çalışma biçimi ve iş birliği hakkında sık sorulan sorular."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>FAQ / 01</span><i /></div>
        <div>
          <p className="eyebrow">SIKÇA SORULAN SORULAR</p>
          <h1>Merak edilenler,<br /><em>kısa cevaplarla.</em></h1>
        </div>
        <p>
          Aradığınızı bulamazsanız iletişim sayfasından yazabilirsiniz;
          soruyu buraya da ekleriz.
        </p>
      </section>

      {kategoriler.map((kategori) => (
        <section className="sss-bolum" key={kategori.baslik}>
          <p className="eyebrow">{kategori.baslik}</p>
          <div className="sss-liste">
            {kategori.sorular.map((madde) => (
              <details key={madde.soru}>
                <summary>{madde.soru}</summary>
                <p>{madde.cevap}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="contact-cta">
        <div>
          <p className="eyebrow">BAŞKA BİR SORU</p>
          <h2>Cevabını burada<br /><em>bulamadınız mı?</em></h2>
        </div>
        <Link href="/iletisim" className="button button-primary button-large">
          İletişim <ArrowUpRight size={19} />
        </Link>
      </section>
    </PageFrame>
  );
}
