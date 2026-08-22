/** Evidence Grid: mağaza sayfası yalnızca kapsamı tanıtır; fiyat ve ödeme, paket detay sayfasında görünür. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { paketler, ucretliHizmetler } from "@/lib/site";

export default function Store() {
  return (
    <PageFrame
      title="Mağaza"
      description="Nechh Robotics uyum paketleri ve hizmetleri: CBAM, KVKK, İSG, GDPR, e-Fatura ve yapay zekâ verimlilik paketleri."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>STORE / 01</span><i /></div>
        <div>
          <p className="eyebrow">MAĞAZA</p>
          <h1>Kendi ekibinizle başlayın,<br /><em>gerekirse biz devralalım.</em></h1>
        </div>
        <p>
          Dijital paketler kendi başınıza kullanabileceğiniz hazır çalışma
          materyalidir. Danışmanlık ise süreci baştan sona bizim yürüttüğümüz
          hizmettir. İkisini bilerek ayrı tutuyoruz. Kapsamı ve koşulları her
          paketin kendi sayfasında bulabilirsiniz.
        </p>
      </section>

      <section className="katalog-grid">
        {paketler.map((paket) => (
          <article className="katalog-karti" key={paket.slug}>
            <p className="eyebrow">{paket.aile}</p>
            <h2>{paket.ad}</h2>
            <p className="katalog-ozet">{paket.ozet}</p>
            <Link href={`/magaza/${paket.slug}`} className="route-link">
              İnceleyin <ArrowUpRight size={18} />
            </Link>
          </article>
        ))}
      </section>

      <section className="hizmet-serit">
        <div>
          <p className="eyebrow">SÜRECİ BİZ YÜRÜTELİM</p>
          <h2>Şablon değil,<br /><em>baştan sona hizmet.</em></h2>
        </div>
        <div className="hizmet-liste">
          {ucretliHizmetler.map((hizmet) => (
            <article key={hizmet.slug}>
              <p className="eyebrow">{hizmet.aile}</p>
              <h3>{hizmet.ad}</h3>
              <p>{hizmet.ozet}</p>
              <Link href={`/magaza/${hizmet.slug}`} className="route-link">
                İnceleyin <ArrowUpRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

export function EnglishStore() {
  return (
    <PageFrame
      locale="en"
      title="Store"
      description="Nechh Robotics compliance packs and services: CBAM, data protection, occupational safety, GDPR and e-invoicing."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>STORE / 01</span><i /></div>
        <div>
          <p className="eyebrow">STORE</p>
          <h1>Start with your own team,<br /><em>hand it over when needed.</em></h1>
        </div>
        <p>
          Digital packs are working materials you can use on your own.
          Consulting is a service where we run the process end to end.
          Scope and terms are listed on each pack page.
        </p>
      </section>

      <section className="katalog-grid">
        {paketler.map((paket) => (
          <article className="katalog-karti" key={paket.slug}>
            <p className="eyebrow">{paket.aile}</p>
            <h2>{paket.ad}</h2>
            <p className="katalog-ozet">{paket.ozet}</p>
            <Link href="/en/contact" className="route-link">
              Ask about this pack <ArrowUpRight size={18} />
            </Link>
          </article>
        ))}
      </section>
    </PageFrame>
  );
}
