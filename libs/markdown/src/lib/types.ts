import type { IReadTimeResults } from "reading-time";

export type FrontMatter = {
  author: {
    name: string;
    image: string;
  };
  category: string;
  datePublished?: string;
  dateModified?: string;
  description: string;
  readingTime: IReadTimeResults;
  seoTitle?: string;
  title: string;
};
