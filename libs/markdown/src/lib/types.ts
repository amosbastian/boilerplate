import type { IReadTimeResults } from "reading-time";

export type FrontMatter = {
  author: {
    name: string;
    image: string;
  };
  category: string;
  date: string;
  description: string;
  readingTime: IReadTimeResults;
  title: string;
};
