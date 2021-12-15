import { Story, Meta } from "@storybook/react";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";

export default {
  component: ArticleCard,
  title: "ArticleCard",
} as Meta;

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  p: 10,
  frontMatter: {
    title: "Article title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit pellentesque ex a malesuada. Nunc vitae mollis ante, convallis hendrerit ante. Aliquam nec metus turpis. Cras vestibulum risus at ante.",
    datePublished: "1994-01-01",
    author: {
      name: "Amos Bastian",
      image: "/blog/author.jpeg",
    },
    category: "category-1",
    readingTime: {
      text: "1 minute",
      time: 0,
      words: 0,
      minutes: 0,
    },
  },
  slug: "slug",
};
