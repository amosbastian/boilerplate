import { getPublishedArticles } from "../get-published-articles/getPublishedArticles";

export function getSortedArticles({ limit }: { limit?: number } = {}) {
  const allArticlesData = getPublishedArticles();

  const distantFuture = new Date(8640000000000000);

  // Sort articles by date published
  return allArticlesData
    .sort(({ frontMatter: { datePublished: a } }, { frontMatter: { datePublished: b } }) => {
      const dateA = a ? new Date(a) : distantFuture;
      const dateB = b ? new Date(b) : distantFuture;
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, limit);
}
