import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FAQPageJsonLd } from "next-seo";
import type { Question } from "next-seo/lib/jsonld/faqPage";
import useTranslation from "next-translate/useTranslation";

export interface FaqSectionProps {
  defaultNs?: string;
  faq: Question[];
  heading: string;
}

export function FaqSection({ defaultNs = "faq", faq, heading }: FaqSectionProps) {
  const { t } = useTranslation(defaultNs);

  return (
    <Box>
      <FAQPageJsonLd mainEntity={faq} />
      <Heading textAlign="center" mb={{ base: 4, md: 6 }}>
        {heading}
      </Heading>
      <Accordion allowToggle allowMultiple>
        {faq.map(({ questionName: question, acceptedAnswerText: answer }) => (
          <AccordionItem key={question}>
            <Heading>
              <AccordionButton>
                <Text variant="secondary" flex="1" textAlign="left">
                  {t(question)}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>{t(answer)}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FaqSection;
