import { Hero } from "@boilerplate/blog/ui";
import { getPublishedArticles } from "@boilerplate/markdown";
import { ArticleCard, Container, getLayout } from "@boilerplate/shared/ui";
import type { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export const getStaticProps = async () => {
  const publishedArticles = getPublishedArticles();

  return {
    props: {
      articles: publishedArticles,
    },
  };
};

export default function Index({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
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
