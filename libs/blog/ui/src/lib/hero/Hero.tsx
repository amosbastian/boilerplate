import { NewsletterSubscriptionInput, Section } from "@boilerplate/shared/ui";
import { Heading } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  const { t } = useTranslation("home");

  return (
    <Section
      containerProps={{
        display: "flex",
        flexDirection: { base: "column" },
        alignItems: "center",
      }}
      variant="transparent"
      py={{ base: 20, lg: 44 }}
    >
      <Heading as="h1" fontSize={{ base: "4xl", md: "7xl" }} mb={6} maxW="2xl">
        {t("hero-heading")}
      </Heading>
      <Heading variant="secondary" textAlign="center" maxW="60ch" as="h2" fontSize={{ base: "md", md: "2xl" }} mb={8}>
        {t("hero-subtitle")}
      </Heading>
      <NewsletterSubscriptionInput w={{ base: "100%", md: "40%" }} size="md" />
    </Section>
  );
}

export default Hero;
