/** Evidence Grid: portfolio cards expose category, intent and an explicit route with compact technical markers. */
import { ArrowUpRight, Construction, Leaf, Scissors, Scale, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@/lib/site";

function ProductGlyph({ tone, slug }: { tone: Product["tone"]; slug: Product["slug"] }) {
  const props = { size: 23, strokeWidth: 1.6 };
  // PALETRA da "operations" tonunda; makas (TONSORA) ona dusmesin.
  if (slug === "paletra") return <Construction {...props} />;
  if (tone === "health") return <Stethoscope {...props} />;
  if (tone === "legal") return <Scale {...props} />;
  if (tone === "compliance") return <Leaf {...props} />;
  return <Scissors {...props} />;
}

export function ProductCard({ product, featured = false, locale = "tr" }: { product: Product; featured?: boolean; locale?: "tr" | "en" }) {
  const isEnglish = locale === "en";
  return (
    <article className={`product-card product-dossier tone-${product.tone}${featured ? " is-featured" : ""}`}>
      <div className="product-card-topline"><span>{product.eyebrow}</span><span className="dossier-control"><i /><i /></span></div>
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <div className="product-name-line"><h3>{product.name}</h3><ProductGlyph tone={product.tone} slug={product.slug} /></div>
        <p>{product.summary}</p>
      </div>
      <div className="dossier-proof"><span>{isEnglish ? "WORKFLOW" : "İŞ AKIŞI"}</span><strong>{product.useCase}</strong></div>
      <Link href={isEnglish ? `/en/solutions/${product.slug}` : `/cozumler/${product.slug}`} className="product-card-link">
        {isEnglish ? "View product" : "Ürünü incele"} <ArrowUpRight size={18} />
      </Link>
    </article>
  );
}
