/** Evidence Grid: product detail pages use an explicit operating context, principles and a single relevant action. */
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { getProduct } from "@/lib/site";
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
        <div className="product-hero-content"><p className="eyebrow">{product.eyebrow}</p><h1>{product.name}</h1><p className="product-hero-category">{product.category}</p><p className="product-hero-summary">{product.summary}</p><a href={product.externalUrl} target="_blank" rel="noreferrer" className="button button-primary">{product.externalLabel} <ExternalLink size={17} /></a><MagazaRozetleri stores={product.stores} /></div>
        <div className="product-orbit" aria-hidden="true"><span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" /><span className="orbit-dot dot-c" /><b>{product.eyebrow.split(" /")[0]}</b></div>
      </section>

      <section className="product-context">
        <div className="context-label"><span>BAĞLAM</span><i /></div>
        <div className="context-copy"><h2>{product.useCase}</h2><p>{product.longDescription}</p></div>
      </section>

      <section className="product-principles">
        <div className="principle-intro"><p className="eyebrow">ÜRÜN YAKLAŞIMI</p><h2>İş akışındaki<br /><em>kritik noktalar.</em></h2></div>
        <div className="principle-detail-list">{product.principles.map((principle, index) => <article key={principle.label}><span>0{index + 1}</span><div><h3>{principle.label}</h3><p>{principle.detail}</p></div></article>)}</div>
      </section>

      <section className="product-outbound"><div><p className="eyebrow">ÜRÜN SAYFASI</p><h2>Ürünün güncel deneyimini<br /><em>ayrı ortamında inceleyin.</em></h2></div><a href={product.externalUrl} target="_blank" rel="noreferrer" className="route-link">{product.externalLabel} <ArrowUpRight size={19} /></a></section>
    </PageFrame>
  );
}
