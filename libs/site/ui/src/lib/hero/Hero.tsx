import { Container } from "@boilerplate/shared/ui";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { GradientButton } from "../gradient-button/GradientButton";

export function Hero() {
  const { t } = useTranslation("index");

  return (
    <Container>
      <Flex direction="column" justify="center" py={{ base: 16, md: 28 }} align="center">
        <Heading as="h1" fontSize={{ base: "4xl", md: "7xl" }} mb={8} maxW="2xl" textAlign="center">
          {t("hero-heading")}
        </Heading>
        <Heading
          variant="textSecondary"
          as="h2"
          fontSize={{ base: "md", md: "2xl" }}
          mb={16}
          maxW="xl"
          textAlign="center"
        >
          {t("hero-subtitle")}
        </Heading>
        <NextLink href="/signin">
          <GradientButton size="lg" rightIcon={<Icon as={RiArrowRightLine} />}>
            {t("hero-cta")}
          </GradientButton>
        </NextLink>
      </Flex>
    </Container>
  );
}

export default Hero;
