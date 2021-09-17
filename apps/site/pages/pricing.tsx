import { getLayout, Section } from "@boilerplate/shared/ui";
import { prefetchGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProductCards, ProductsQuery } from "@boilerplate/site-feature";
import { CtaCard, FaqSection } from "@boilerplate/site/ui";
import { Button, Heading, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { Question } from "next-seo/lib/jsonld/faqPage";
import useTranslation from "next-translate/useTranslation";
import { dehydrate } from "react-query";

const FREQUENTLY_ASKED_QUESTIONS: Question[] = [
  { questionName: "pricing:question-1", acceptedAnswerText: "pricing:answer-1" },
  { questionName: "pricing:question-2", acceptedAnswerText: "pricing:answer-2" },
  { questionName: "pricing:question-3", acceptedAnswerText: "pricing:answer-3" },
  { questionName: "pricing:question-4", acceptedAnswerText: "pricing:answer-4" },
];

export const getStaticProps = async () => {
  const queryClient = await prefetchGraphqlQuery(ProductsQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Pricing() {
  const { t } = useTranslation("pricing");
  const cardBackgroundColor = useColorModeValue("primary.100", "primary.500");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <Section variant="transparent">
        <Heading textAlign="center" mb={{ base: 4, md: 6 }}>
          {t("heading")}
        </Heading>
        <Text mb={16} variant="secondary" fontSize="lg" textAlign="center">
          {t("subtitle")}
        </Text>
        <ProductCards />
      </Section>
      <Section containerProps={{ maxW: "container.md" }}>
        <FaqSection heading={t("faq-heading")} faq={FREQUENTLY_ASKED_QUESTIONS} />
      </Section>
      <Section variant="transparent">
        <CtaCard backgroundColor={cardBackgroundColor} heading={t("cta-heading")} subtitle={t("cta-subtitle")}>
          <ChakraLink>
            <Button w="100%" colorScheme="primary" href="mailto:support@frontend.com">
              {t("cta-button-text")}
            </Button>
          </ChakraLink>
        </CtaCard>
      </Section>
    </>
  );
}

Pricing.getLayout = getLayout;
