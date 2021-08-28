import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export const getParsedFileContentBySlug = (slug: string, postsPath: string) => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};
