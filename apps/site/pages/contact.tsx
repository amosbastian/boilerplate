import { getLayout, Section } from "@boilerplate/shared/ui";
import { ContactForm } from "@boilerplate/site-feature";
import { CtaCard } from "@boilerplate/site/ui";
import { Button, Heading, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("contact");
  const cardBackgroundColor = useColorModeValue("primary.100", "primary.500");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <Section
        variant="transparent"
        containerProps={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Heading mb={{ base: 4, md: 6 }} fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
          {t("heading")}
        </Heading>
        <Text variant="secondary" fontSize="lg" mb={{ base: 4, md: 10 }}>
          {t("subtitle")}
        </Text>
        <ContactForm justifySelf="center" minW="min(100%, var(--chakra-sizes-container-md))" maxW="container.md" />
      </Section>
      <Section>
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

Contact.getLayout = getLayout;
