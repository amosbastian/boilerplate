import { Heading } from "@boilerplate/blog/ui";
import { getParsedFileContentBySlug, renderMarkdown } from "@boilerplate/markdown";
import { mdxComponents } from "@boilerplate/shared/mdx";
import { Container, getLayout } from "@boilerplate/shared/ui";
import fs from "fs";
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { join } from "path";

const POSTS_PATH = join(process.cwd(), process.env.ARTICLES_MARKDOWN_PATH ?? "_articles");

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug as string, POSTS_PATH);
  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHTML,
    },
  };
};

export function Page({ frontMatter, html }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxW="container.md" py={10}>
      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${frontMatter.slug}`}
        title={frontMatter.title}
        images={[`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${frontMatter.slug}.png`]}
        datePublished={frontMatter.datePublished}
        dateModified={frontMatter.dateModified}
        authorName={[frontMatter.author.name]}
        publisherName={process.env.NEXT_PUBLIC_BRAND_NAME}
        publisherLogo={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
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
