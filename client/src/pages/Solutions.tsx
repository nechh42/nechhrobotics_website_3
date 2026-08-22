/** Evidence Grid: solutions are documented as sector-specific systems, each with a clear path and no overstated claims. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";
import { SectionLead } from "@/components/SectionLead";
import { products } from "@/lib/site";

export default function Solutions() {
  return (
    <PageFrame title="Çözümler" description="Nechh Robotics ürün portföyü: sağlık, hukuk, CBAM ve operasyon çözümleri.">
      <section className="page-hero page-hero-solutions">
        <div className="page-hero-rail"><span>INDEX / 01</span><i /></div>
        <div><p className="eyebrow">ÇÖZÜMLER</p><h1>Her sektöre aynı araç değil.<br /><em>Doğru iş akışına doğru sistem.</em></h1></div>
        <p className="page-hero-copy">Nechh ürünleri, sürecin tekrar eden baskısını ve sektöre özgü bağlamını birlikte ele almak için tasarlanır.</p>
      </section>

      <section className="solutions-index">
        <div className="index-rule"><span>PORTFÖY / 04 ÜRÜN</span><i /></div>
        <div className="solutions-list">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="comparison-section">
        <SectionLead number="02" eyebrow="ORTAK YAKLAŞIM" title={<>Farklı sektörler.<br /><em>Ortak tasarım soruları.</em></>} copy="Ürünlerin çalışma alanları farklı olsa da her birinde aynı temel sorulara odaklanırız: veri hangi bağlamda hareket ediyor, süreç nerede kopuyor ve takip edilebilirlik nasıl güçlenir?" />
        <div className="comparison-table" role="table" aria-label="Ürün yaklaşımı karşılaştırması">
          <div className="comparison-row comparison-head" role="row"><span role="columnheader">Ürün</span><span role="columnheader">Odak alanı</span><span role="columnheader">Çalışma sorusu</span><span aria-hidden="true" /></div>
          {products.map((product) => <div className="comparison-row" role="row" key={product.slug}><strong role="cell">{product.name}</strong><span role="cell">{product.category}</span><span role="cell">{product.useCase}</span><Link role="cell" href={`/cozumler/${product.slug}`} aria-label={`${product.name} detay`}>Detay <ArrowUpRight size={15} /></Link></div>)}
        </div>
      </section>
    </PageFrame>
  );
}
