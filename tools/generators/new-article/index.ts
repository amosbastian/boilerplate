import { formatFiles, generateFiles, joinPathFragments, names, Tree } from "@nrwl/devkit";

interface NewArticleSchemaOptions {
  authorImage?: string;
  authorName: string;
  description?: string;
  title: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(host, joinPathFragments(__dirname, "./files"), "./_articles", {
    authorImage: schema.authorImage,
    authorName: schema.authorName,
    creationDate: new Date().toISOString(),
    description: schema.description || "",
    normalizedTitle: names(schema.title).fileName,
    title: schema.title,
  });

  await formatFiles(host);
}
