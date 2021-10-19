import { Hero } from "@boilerplate/blog/ui";
import { getParsedFileContentBySlug } from "@boilerplate/markdown";
import { ArticleCard, Container, getLayout } from "@boilerplate/shared/ui";
import fs from "fs";
import type { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { join } from "path";

const POSTS_PATH = join(process.cwd(), process.env.ARTICLES_MARKDOWN_PATH || "_articles");

export const getStaticProps = async () => {
  const slugs = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => slug);

  const articles = [];

  for (const slug of slugs) {
    const articleMarkdownContent = getParsedFileContentBySlug(slug as string, POSTS_PATH);

    articles.push(articleMarkdownContent);
  }

  return {
    props: {
      articles,
    },
  };
};

export default function Index({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo title={t("meta-title")} description={t("meta-title")} />
      <Hero />
      <Container
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gridColumnGap={4}
        gridRowGap={{ base: 16, xl: 32 }}
        pb={20}
      >
        {(articles ?? []).map(({ frontMatter }) => (
          <ArticleCard key={frontMatter.title} frontMatter={frontMatter} />
        ))}
      </Container>
    </>
  );
}

Index.getLayout = getLayout;
