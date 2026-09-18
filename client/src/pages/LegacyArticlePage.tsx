/** Evidence Grid: migrated articles retain their original public text while gaining readable typography and clear archive provenance.
 *  18 Eyl 2026: `date` taşıyan yazı yeni yazıdır — "taşınmış arşiv" damgası yerine tarih ve ürün bağlantısı gösterilir. */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { legacyArticles, legacyEnglishArticles } from "@/lib/legacyArticles";
import { englishProducts, products } from "@/lib/site";

type ArticleProps = { params?: { slug?: string }; locale?: "tr" | "en" };

function tarihYaz(date: string, isEnglish: boolean) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(isEnglish ? "en-GB" : "tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function LegacyArticlePage({ params, locale = "tr" }: ArticleProps) {
  const isEnglish = locale === "en";
  const article = (isEnglish ? legacyEnglishArticles : legacyArticles).find((item) => item.slug === params?.slug);
  const backHref = isEnglish ? "/en/blog" : "/blog";
  if (!article) return <PageFrame locale={locale} title={isEnglish ? "Article not found" : "Makale bulunamadı"}><section className="not-found"><p className="eyebrow">404 / ARCHIVE</p><h1>{isEnglish ? "This note is not in the archive." : "Bu not arşivde bulunamadı."}</h1><Link href={backHref} className="button button-primary"><ArrowLeft size={17} /> {isEnglish ? "Back to blog" : "Blog yazılarına dönün"}</Link></section></PageFrame>;

  const product = article.product ? (isEnglish ? englishProducts : products).find((item) => item.slug === article.product) : undefined;
  const productHref = product ? (isEnglish ? `/en/solutions/${product.slug}` : `/cozumler/${product.slug}`) : undefined;

  const hero = article.date ? (
    <>
      <p className="eyebrow">{article.category} / NECHH ROBOTICS</p>
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      <div className="article-metadata"><span>{tarihYaz(article.date, isEnglish).toLocaleUpperCase(isEnglish ? "en-GB" : "tr-TR")}</span><span>NECHH ROBOTICS</span><span>{article.category}</span></div>
    </>
  ) : (
    <>
      <p className="eyebrow">{article.category} / MIGRATED ARCHIVE</p>
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      <div className="article-metadata"><span>{isEnglish ? "PUBLIC WEBSITE MIGRATION" : "AÇIK WEB SİTESİ AKTARIMI"}</span><span>{isEnglish ? "CURRENTNESS REVIEW REQUIRED" : "GÜNCELLİK KONTROLÜ GEREKİR"}</span><span>{article.category}</span></div>
    </>
  );

  const note = article.date
    ? (isEnglish
      ? `Written by Nechh Robotics on ${tarihYaz(article.date, true)}. Regulatory details reflect the position on that date; check current official sources before acting.`
      : `Nechh Robotics tarafından ${tarihYaz(article.date, false)} tarihinde yazıldı. Mevzuat bilgileri o günün durumunu yansıtır; uygulamadan önce güncel resmî kaynaklardan kontrol edin.`)
    : (isEnglish
      ? "This text was migrated from the previous public website. Verify time-sensitive regulatory details against current official sources before acting."
      : "Bu metin önceki açık web sitesinden taşınmıştır. Zaman duyarlı düzenleyici ayrıntıları uygulamaya geçmeden önce güncel resmî kaynaklardan doğrulayın.");

  return <PageFrame locale={locale} title={article.title} description={article.excerpt}><section className="article-hero"><Link href={backHref} className="article-back"><ArrowLeft size={16} /> {isEnglish ? "BLOG" : "BLOG YAZILARI"}</Link>{hero}</section><article className="article-body"><aside><span>{article.date ? (isEnglish ? "ABOUT THIS ARTICLE" : "BU YAZI HAKKINDA") : (isEnglish ? "ARCHIVE NOTE" : "ARŞİV NOTU")}</span><i /><p>{note}</p></aside><div>{article.body.map((paragraph, index) => <p key={`${article.slug}-${index}`}>{paragraph}</p>)}</div></article>{product && productHref ? <section className="article-cta"><div><p className="eyebrow">{product.name}</p><h2>{product.category}<br /><em>{isEnglish ? "see how it works." : "nasıl çalıştığına bakın."}</em></h2></div><Link href={productHref} className="route-link">{isEnglish ? `Open ${product.name}` : `${product.name} sayfasına gidin`} <ArrowUpRight size={18} /></Link></section> : <section className="article-cta"><div><p className="eyebrow">{isEnglish ? "NEXT CONTEXT" : "SONRAKİ BAĞLAM"}</p><h2>{isEnglish ? <>Discuss the workflow<br /><em>behind the question.</em></> : <>Sorunun arkasındaki iş akışını<br /><em>birlikte konuşalım.</em></>}</h2></div><Link href={isEnglish ? "/en/contact" : "/iletisim"} className="route-link">{isEnglish ? "Contact Nechh" : "Nechh ile iletişime geçin"} <ArrowUpRight size={18} /></Link></section>}</PageFrame>;
}

export function EnglishLegacyArticlePage(props: Omit<ArticleProps, "locale">) { return <LegacyArticlePage {...props} locale="en" />; }
