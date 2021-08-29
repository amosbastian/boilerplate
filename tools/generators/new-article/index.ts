import { formatFiles, generateFiles, joinPathFragments, names, Tree } from "@nrwl/devkit";

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(host, joinPathFragments(__dirname, "./files"), "./_articles", {
    title: schema.title,
    author: schema.author,
    excerpt: schema.excerpt || "",
    normalizedTitle: names(schema.title).fileName,
    creationDate: new Date().toISOString(),
  });

  await formatFiles(host);
}
