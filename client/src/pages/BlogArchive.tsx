/** Evidence Grid: legacy articles become a searchable-looking editorial archive without altering their extracted source claims. */
import { ArrowUpRight, Search, X } from "lucide-react";
import React from "react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { legacyArticles, legacyEnglishArticles, type LegacyArticle } from "@/lib/legacyArticles";
import { filterArchiveArticles } from "@/lib/archiveSearch";

function Archive({ locale }: { locale: "tr" | "en" }) {
  const isEnglish = locale === "en";
  const articles = isEnglish ? legacyEnglishArticles : legacyArticles;
  const prefix = isEnglish ? "/en/blog" : "/kaynaklar";
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredArticles = useMemo(() => filterArchiveArticles(articles, query, activeCategory, locale), [activeCategory, articles, locale, query]);
  const title = isEnglish ? <>Notes for regulated<br /><em>working environments.</em></> : <>Regülasyonla çalışan ekipler için<br /><em>notlar ve çalışma çerçeveleri.</em></>;
  const hasActiveFilter = query.length > 0 || activeCategory !== "all";
  const labels = isEnglish
    ? { search: "Search previous articles", all: "All topics", count: `${filteredArticles.length} of ${articles.length} articles`, clear: "Clear filters", noResults: "No articles matched this search.", noResultsCopy: "Try a different topic or clear the active filters.", read: "Read article" }
    : { search: "Eski makalelerde ara", all: "Tüm konular", count: `${filteredArticles.length} / ${articles.length} makale`, clear: "Filtreleri temizle", noResults: "Bu aramayla eşleşen makale bulunamadı.", noResultsCopy: "Farklı bir konu deneyin veya aktif filtreleri temizleyin.", read: "Makaleyi okuyun" };
  return <PageFrame locale={locale} title={isEnglish ? "Resources" : "Kaynaklar"} description={isEnglish ? "Nechh Robotics notes on CBAM, regulation, process design and engineering." : "Nechh Robotics'in CBAM, regülasyon, süreç tasarımı ve mühendislik çalışma notları."}><section className="archive-hero"><div className="resources-hero-rail"><span>ARCHIVE / 01</span><i /></div><div><p className="eyebrow">{isEnglish ? "RESOURCE ARCHIVE" : "KAYNAK ARŞİVİ"}</p><h1>{title}</h1></div><p>{isEnglish ? "Selected and migrated articles from the previous Nechh Robotics website. Individual regulatory claims should be reviewed before they are treated as current guidance." : "Eski Nechh Robotics sitesinden taşınan seçili makaleler. Düzenleyici konulardaki her bilgi, güncel yönlendirme olarak kullanılmadan önce yeniden kontrol edilmelidir."}</p></section><section className="archive-filter"><span>{isEnglish ? `${articles.length} migrated articles` : `${articles.length} taşınmış makale`}</span><i /><span>{isEnglish ? "TURKISH + ENGLISH ARCHIVE" : "TÜRKÇE + İNGİLİZCE ARŞİV"}</span></section><section className="archive-tools" aria-label={isEnglish ? "Archive search and filters" : "Arşiv arama ve filtreleri"}><label className="archive-search"><Search size={17} /><span className="sr-only">{labels.search}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.search} /></label><div className="archive-categories" aria-label={isEnglish ? "Archive subjects" : "Arşiv konuları"}><button className={activeCategory === "all" ? "archive-category is-active" : "archive-category"} type="button" onClick={() => setActiveCategory("all")} aria-pressed={activeCategory === "all"}>{labels.all}</button>{categories.map((category, index) => <button className={activeCategory === category ? "archive-category is-active" : "archive-category"} key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}><b>{String(index + 1).padStart(2, "0")}</b>{category}</button>)}</div><div className="archive-result-line"><span>{labels.count}</span>{hasActiveFilter ? <button type="button" onClick={() => { setQuery(""); setActiveCategory("all"); }}><X size={14} /> {labels.clear}</button> : null}</div></section>{filteredArticles.length > 0 ? <section className="archive-grid" aria-live="polite">{filteredArticles.map((article: LegacyArticle) => <article className="archive-card" key={article.slug}><div><span>0{(articles.findIndex((item) => item.slug === article.slug) + 1).toString().padStart(2, "0")}</span><p>{article.category}</p></div><h2>{article.title}</h2><p>{article.excerpt}</p><Link href={`${prefix}/${article.slug}`} className="route-link">{labels.read} <ArrowUpRight size={17} /></Link></article>)}</section> : <section className="archive-empty" aria-live="polite"><p className="eyebrow">0 / 00</p><h2>{labels.noResults}</h2><p>{labels.noResultsCopy}</p><button type="button" className="button button-primary" onClick={() => { setQuery(""); setActiveCategory("all"); }}>{labels.clear}</button></section>}</PageFrame>;
}

export function TurkishArchive() { return <Archive locale="tr" />; }
export function EnglishArchive() { return <Archive locale="en" />; }
