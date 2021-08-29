import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import type { FrontMatter } from "../types";

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string,
): { frontMatter: FrontMatter; content: string } => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: { ...data, readingTime: readingTime(content) } as FrontMatter,
    content,
  };
};
