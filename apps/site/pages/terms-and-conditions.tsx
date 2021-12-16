import { getParsedFileContentBySlug, renderMarkdown } from "@boilerplate/markdown";
import { mdxComponents } from "@boilerplate/shared/mdx";
import { Container, getLayout } from "@boilerplate/shared/ui";
import { Badge, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { join } from "path";
import * as React from "react";

dayjs.extend(relativeTime);

const TERMS_AND_CONDITIONS_PATH = join(process.cwd(), "terms-and-conditions");

export const getStaticProps = async () => {
  const termsAndConditionsMarkdownContent = getParsedFileContentBySlug(
    "terms-and-conditions",
    TERMS_AND_CONDITIONS_PATH,
  );
  const renderedHTML = await renderMarkdown(termsAndConditionsMarkdownContent.content);

  return {
    props: {
      frontMatter: termsAndConditionsMarkdownContent.frontMatter,
      html: renderedHTML,
    },
  };
};

export function TermsAndConditions({ frontMatter, html }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation("common");

  return (
    <Container maxW="container.md" py={{ base: 8, md: 16 }}>
      <NextSeo title={frontMatter.title} />
      <article>
        <Heading as="h1" size="2xl" mb={8}>
          {frontMatter.title}
        </Heading>
        {frontMatter.dateModified && frontMatter.dateModified !== frontMatter.datePublished ? (
          <Badge mt={4}>{t("last-updated", { lastUpdated: dayjs(frontMatter.dateModified).fromNow() })}</Badge>
        ) : null}
        <MDXRemote {...html} components={mdxComponents} />
      </article>
    </Container>
  );
}

TermsAndConditions.getLayout = getLayout;

export default TermsAndConditions;
