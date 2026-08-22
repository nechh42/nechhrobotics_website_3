import type { LegacyArticle } from "./legacyArticles";

export function filterArchiveArticles(
  articles: LegacyArticle[],
  query: string,
  activeCategory: string,
  locale: "tr" | "en",
) {
  const search = query.trim().toLocaleLowerCase(locale === "en" ? "en-US" : "tr-TR");
  return articles.filter((article) => {
    const hasCategory = activeCategory === "all" || article.category === activeCategory;
    const searchable = `${article.title} ${article.excerpt} ${article.category} ${article.body.join(" ")}`.toLocaleLowerCase(locale === "en" ? "en-US" : "tr-TR");
    return hasCategory && (!search || searchable.includes(search));
  });
}
