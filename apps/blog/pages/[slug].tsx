import { Heading } from "@boilerplate/blog/ui";
import { getParsedFileContentBySlug, getPublishedArticles, renderMarkdown } from "@boilerplate/markdown";
import { configuration } from "@boilerplate/shared/configuration";
import { mdxComponents } from "@boilerplate/shared/mdx";
import { Container, getLayout } from "@boilerplate/shared/ui";
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { join } from "path";
import * as React from "react";

const ARTICLES_PATH = join(process.cwd(), process.env.ARTICLES_MARKDOWN_PATH ?? "articles");

export const getStaticPaths: GetStaticPaths = async () => {
  const publishedArticles = getPublishedArticles();

  const paths = publishedArticles.map((article) => ({ params: { slug: article.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params.slug as string;
  const articleMarkdownContent = getParsedFileContentBySlug(slug, ARTICLES_PATH);
  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: { ...articleMarkdownContent.frontMatter, slug },
      html: renderedHTML,
    },
  };
};

export function Page({ frontMatter, html }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxW="container.md" py={{ base: 8, md: 16 }}>
      <ArticleJsonLd
        url={`${configuration.BASE_URL_SITE}/blog/${frontMatter.slug}`}
        title={frontMatter.seoTitle ?? frontMatter.title}
        images={[`${configuration.BASE_URL_SITE}/blog/${frontMatter.slug}.png`]}
        datePublished={frontMatter.datePublished ? frontMatter.datePublished : undefined}
        dateModified={frontMatter.dateModified ? frontMatter.dateModified : undefined}
        authorName={[frontMatter.author.name]}
        publisherName={configuration.BRAND_NAME}
        publisherLogo={`${configuration.BASE_URL_SITE}/logo.png`}
        description={frontMatter.description}
      />
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <article>
        <Heading frontMatter={frontMatter} />
        <MDXRemote {...html} components={mdxComponents} />
      </article>
    </Container>
  );
}

Page.getLayout = getLayout;

export default Page;
