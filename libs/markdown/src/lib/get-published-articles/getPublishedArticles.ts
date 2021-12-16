import fs from "fs";
import { join } from "path";
import { getParsedFileContentBySlug } from "../get-parsed-file-content-by-slug/getParsedFileContentBySlug";

const ARTICLES_PATH = join(process.cwd(), process.env.ARTICLES_MARKDOWN_PATH ?? "articles");

export function getPublishedArticles() {
  const fileNames = fs.readdirSync(ARTICLES_PATH);

  const allArticlesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const parsedFileContent = getParsedFileContentBySlug(slug, ARTICLES_PATH);

    // Combine the data with the id
    return {
      slug,
      ...parsedFileContent,
    };
  });

  return allArticlesData.filter(({ frontMatter }) => Boolean(frontMatter.datePublished));
}
