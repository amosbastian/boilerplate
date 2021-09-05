import { Section } from "@boilerplate/shared/ui";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";
import NextLink from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { GradientButton } from "../gradient-button/GradientButton";

export function Hero() {
  const { t } = useTranslation("index");

  return (
    <Section
      containerProps={{
        display: "flex",
        gridColumnGap: { md: 10, xl: 20 },
        gridRowGap: { base: 8, md: 16 },
        flexDirection: { base: "column", lg: "row" },
        justifyContent: "space-between",
      }}
      variant="transparent"
      py={{ base: 20, lg: 44 }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems={{ base: "center", lg: "flex-start" }}
        maxW={{ base: "100%", lg: "500px" }}
      >
        <Heading as="h1" fontSize={{ base: "4xl", md: "7xl" }} mb={6} maxW="2xl">
          {t("hero-heading")}
        </Heading>
        <Heading variant="secondary" as="h2" fontSize={{ base: "md", md: "2xl" }} mb={{ base: 8, md: 16 }}>
          {t("hero-subtitle")}
        </Heading>
        <NextLink href="/signin" passHref>
          <GradientButton as="a" size="lg" rightIcon={<Icon as={RiArrowRightLine} />}>
            {t("hero-cta")}
          </GradientButton>
        </NextLink>
      </Flex>
      <NextImage src="http://placekitten.com/g/900/500" alt={t("hero-image-alt-text")} width={900} height={500} />
    </Section>
  );
}

export default Hero;
