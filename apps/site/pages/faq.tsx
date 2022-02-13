import { ButtonLink, getLayout, Section } from "@boilerplate/shared/ui";
import { CtaCard, FaqSection } from "@boilerplate/site/ui";
import { useColorModeValue } from "@chakra-ui/react";
import { FAQPageJsonLd, NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

const FREQUENTLY_ASKED_QUESTIONS: { questionName: string; acceptedAnswerText: string }[] = [
  { questionName: "question-1", acceptedAnswerText: "answer-1" },
  { questionName: "question-2", acceptedAnswerText: "answer-2" },
  { questionName: "question-3", acceptedAnswerText: "answer-3" },
  { questionName: "question-4", acceptedAnswerText: "answer-4" },
];

export default function Faq() {
  const { t } = useTranslation("faq");
  const cardBackgroundColor = useColorModeValue("primary.100", "primary.500");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <FAQPageJsonLd mainEntity={FREQUENTLY_ASKED_QUESTIONS} />
      <Section variant="transparent">
        <FaqSection heading={t("heading")} faq={FREQUENTLY_ASKED_QUESTIONS} />
      </Section>
      <Section>
        <CtaCard backgroundColor={cardBackgroundColor} heading={t("cta-heading")} subtitle={t("cta-subtitle")}>
          <ButtonLink
            maxW={{ base: "100%", md: "max-content" }}
            colorScheme="primary"
            href="mailto:support@boilerplate.com"
          >
            {t("cta-button-text")}
          </ButtonLink>
        </CtaCard>
      </Section>
    </>
  );
}

Faq.getLayout = getLayout;
