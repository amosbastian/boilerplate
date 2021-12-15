import { formatFiles, generateFiles, joinPathFragments, names, Tree } from "@nrwl/devkit";

interface NewArticleSchemaOptions {
  authorImage?: string;
  authorName: string;
  category: string;
  description?: string;
  title: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(host, joinPathFragments(__dirname, "./files"), "./articles", {
    authorImage: schema.authorImage,
    authorName: schema.authorName,
    category: schema.category,
    creationDate: new Date().toISOString(),
    description: schema.description || "",
    normalizedTitle: names(schema.title).fileName,
    title: schema.title,
    seoTitle: schema.title,
  });

  await formatFiles(host);
}
