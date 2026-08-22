/** Evidence Grid: migrated articles retain their original public text while gaining readable typography and clear archive provenance. */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { legacyArticles, legacyEnglishArticles } from "@/lib/legacyArticles";

type ArticleProps = { params?: { slug?: string }; locale?: "tr" | "en" };

export default function LegacyArticlePage({ params, locale = "tr" }: ArticleProps) {
  const isEnglish = locale === "en";
  const article = (isEnglish ? legacyEnglishArticles : legacyArticles).find((item) => item.slug === params?.slug);
  const backHref = isEnglish ? "/en/resources" : "/kaynaklar";
  if (!article) return <PageFrame locale={locale} title={isEnglish ? "Article not found" : "Makale bulunamadı"}><section className="not-found"><p className="eyebrow">404 / ARCHIVE</p><h1>{isEnglish ? "This note is not in the archive." : "Bu not arşivde bulunamadı."}</h1><Link href={backHref} className="button button-primary"><ArrowLeft size={17} /> {isEnglish ? "Back to resources" : "Kaynaklara dönün"}</Link></section></PageFrame>;
  return <PageFrame locale={locale} title={article.title} description={article.excerpt}><section className="article-hero"><Link href={backHref} className="article-back"><ArrowLeft size={16} /> {isEnglish ? "RESOURCES" : "KAYNAKLAR"}</Link><p className="eyebrow">{article.category} / MIGRATED ARCHIVE</p><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-metadata"><span>{isEnglish ? "PUBLIC WEBSITE MIGRATION" : "AÇIK WEB SİTESİ AKTARIMI"}</span><span>{isEnglish ? "CURRENTNESS REVIEW REQUIRED" : "GÜNCELLİK KONTROLÜ GEREKİR"}</span><span>{article.category}</span></div></section><article className="article-body"><aside><span>{isEnglish ? "ARCHIVE NOTE" : "ARŞİV NOTU"}</span><i /><p>{isEnglish ? "This text was migrated from the previous public website. Verify time-sensitive regulatory details against current official sources before acting." : "Bu metin önceki açık web sitesinden taşınmıştır. Zaman duyarlı düzenleyici ayrıntıları uygulamaya geçmeden önce güncel resmî kaynaklardan doğrulayın."}</p></aside><div>{article.body.map((paragraph, index) => <p key={`${article.slug}-${index}`}>{paragraph}</p>)}</div></article><section className="article-cta"><div><p className="eyebrow">{isEnglish ? "NEXT CONTEXT" : "SONRAKİ BAĞLAM"}</p><h2>{isEnglish ? <>Discuss the workflow<br /><em>behind the question.</em></> : <>Sorunun arkasındaki iş akışını<br /><em>birlikte konuşalım.</em></>}</h2></div><Link href={isEnglish ? "/en/contact" : "/iletisim"} className="route-link">{isEnglish ? "Contact Nechh" : "Nechh ile iletişime geçin"} <ArrowUpRight size={18} /></Link></section></PageFrame>;
}

export function EnglishLegacyArticlePage(props: Omit<ArticleProps, "locale">) { return <LegacyArticlePage {...props} locale="en" />; }
