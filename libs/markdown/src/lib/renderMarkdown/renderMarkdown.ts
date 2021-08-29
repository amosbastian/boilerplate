import { serialize } from "next-mdx-remote/serialize";

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || "", {
    mdxOptions: {
      rehypePlugins: [],
    },
  });
};
