/** Evidence Grid: product detail pages use an explicit operating context, principles and a single relevant action. */
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { cbamMaliyet, getProduct } from "@/lib/site";
import { MagazaRozetleri } from "@/components/MagazaRozetleri";

type ProductDetailProps = { params?: { slug?: string } };

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = getProduct(params?.slug);
  if (!product) {
    return <PageFrame title="Ürün bulunamadı"><section className="not-found"><p className="eyebrow">404 / ÜRÜN</p><h1>Bu ürün rotası bulunamadı.</h1><Link href="/cozumler" className="button button-primary">Çözümlere dönün <ArrowLeft size={17} /></Link></section></PageFrame>;
  }

  return (
    <PageFrame title={product.name} description={product.summary}>
      <section className={`product-hero tone-${product.tone}`}>
        <div className="product-hero-rail"><Link href="/cozumler"><ArrowLeft size={16} /> ÇÖZÜMLER</Link><i /></div>
        <div className="product-hero-content"><p className="eyebrow">{product.eyebrow}</p><h1>{product.name}</h1><p className="product-hero-category">{product.category}</p><p className="product-hero-summary">{product.summary}</p>{product.externalUrl.startsWith("/") ? <Link href={product.externalUrl} className="button button-primary">{product.externalLabel} <ArrowUpRight size={17} /></Link> : <a href={product.externalUrl} target="_blank" rel="noreferrer" className="button button-primary">{product.externalLabel} <ExternalLink size={17} /></a>}<MagazaRozetleri stores={product.stores} /></div>
        <div className="product-orbit" aria-hidden="true"><span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" /><span className="orbit-dot dot-c" /><b>{product.eyebrow.split(" /")[0]}</b></div>
      </section>

      {/* MALIYET SERIDI — 13 Eyl 2026.
          "Bu belge ne ise yarar, resmi degilse neden para odeyeyim" sorusu
          sayfada hicbir yerde cevaplanmiyordu. Cevap PARA ve sayilar
          Eco-Report'un kendi motorundan olculdu.
          En uste konuldu: basliga bakip gecen kisi de gorsun. */}
      {product.slug === "eco-report" && (
        <section className="maliyet-serit">
          <div className="maliyet-baslik">
            <p className="eyebrow">NEDEN GEREKLİ</p>
            <h2>{cbamMaliyet.baslik}</h2>
            <p>{cbamMaliyet.altBaslik}</p>
          </div>
          <div className="maliyet-kutular">
            {cbamMaliyet.yillar.map((y) => (
              <article key={y.yil} className="maliyet-kutu">
                <span className="maliyet-yil">{y.yil}</span>
                <strong>{y.tutar}</strong>
                <small>varsayılan değer {y.ceza} cezalı</small>
              </article>
            ))}
          </div>
          <p className="maliyet-ornek">{cbamMaliyet.ornek}</p>
          <p className="maliyet-kapanis">{cbamMaliyet.kapanis}</p>
          <p className="maliyet-dipnot">{cbamMaliyet.dipnot}</p>
        </section>
      )}
      <section className="product-context">
        <div className="context-label"><span>BAĞLAM</span><i /></div>
        <div className="context-copy"><h2>{product.useCase}</h2><p>{product.longDescription}</p></div>
      </section>

      <section className="product-principles">
        <div className="principle-intro"><p className="eyebrow">ÜRÜN YAKLAŞIMI</p><h2>İş akışındaki<br /><em>kritik noktalar.</em></h2></div>
        <div className="principle-detail-list">{product.principles.map((principle, index) => <article key={principle.label}><span>0{index + 1}</span><div><h3>{principle.label}</h3><p>{principle.detail}</p></div></article>)}</div>
      </section>

      {product.externalUrl.startsWith("/") ? (
        <section className="product-outbound"><div><p className="eyebrow">BİLGİ</p><h2>İşletmenize uyar mı?<br /><em>Birlikte bakalım.</em></h2></div><Link href={product.externalUrl} className="route-link">{product.externalLabel} <ArrowUpRight size={19} /></Link></section>
      ) : (
        <section className="product-outbound"><div><p className="eyebrow">ÜRÜN SAYFASI</p><h2>Ürünün güncel deneyimini<br /><em>ayrı ortamında inceleyin.</em></h2></div><a href={product.externalUrl} target="_blank" rel="noreferrer" className="route-link">{product.externalLabel} <ArrowUpRight size={19} /></a></section>
      )}
    </PageFrame>
  );
}
