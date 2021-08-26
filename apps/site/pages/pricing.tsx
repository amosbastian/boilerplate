import { getLayout, Section, Container } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { Heading, Text } from "@chakra-ui/react";
import { ProductCards } from "@boilerplate/site-feature";
import type { Question } from "next-seo/lib/jsonld/faqPage";
import { FaqSection } from "@boilerplate/site/ui";

const FREQUENTLY_ASKED_QUESTIONS: Question[] = [
  { questionName: "pricing:question-1", acceptedAnswerText: "pricing:answer-1" },
  { questionName: "pricing:question-2", acceptedAnswerText: "pricing:answer-2" },
  { questionName: "pricing:question-3", acceptedAnswerText: "pricing:answer-3" },
  { questionName: "pricing:question-4", acceptedAnswerText: "pricing:answer-4" },
];

export default function Pricing() {
  const { t } = useTranslation("pricing");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <Section variant="transparent">
        <Container>
          <Heading textAlign="center" mb={{ base: 4, sm: 6, md: 8 }}>
            {t("heading")}
          </Heading>
          <Text mb={16} variant="textSecondary" fontSize="lg" textAlign="center">
            {t("subtitle")}
          </Text>
          <ProductCards />
        </Container>
      </Section>
      <Section>
        <Container maxW="container.md" m="0 auto">
          <FaqSection heading={t("faq:heading")} faq={FREQUENTLY_ASKED_QUESTIONS} />
        </Container>
      </Section>
      <Section variant="transparent">
        {/* <CtaCard backgroundColor={cardBackgroundColor} heading={t("cta-heading")} subtitle={t("cta-subtitle")}>
          <ChakraLink>
            <Button w="100%" colorScheme="primary" href="mailto:support@frontend.com">
              {t("cta-button-text")}
            </Button>
          </ChakraLink>
        </CtaCard> */}
      </Section>
    </>
  );
}

Pricing.getLayout = getLayout;
