import { ButtonLink, getLayout, Section } from "@boilerplate/shared/ui";
import { CtaCard, Features, GradientButton, Hero, ImageSection } from "@boilerplate/site/ui";
import { Box, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Feature2Page() {
  const { t } = useTranslation("feature-2");
  const py = { base: 20, lg: 44 };
  const cardBackgroundColor = useColorModeValue("primary.100", "primary.500");

  return (
    <>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
      <Hero
        title={t("hero-heading")}
        subtitle={t("hero-subtitle")}
        cta={
          <NextLink href="/login" passHref>
            <GradientButton as="a" size="lg" rightIcon={<Icon as={RiArrowRightLine} />}>
              {t("hero-cta")}
            </GradientButton>
          </NextLink>
        }
        image={
          <NextImage src="http://placekitten.com/g/800/500" alt={t("hero-image-alt-text")} width={800} height={500} />
        }
      />
      <ImageSection
        py={py}
        heading={
          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={{ base: 4, md: 10 }}>
            {t("section-1-heading")}
          </Heading>
        }
        subtitle={
          <Heading as="h3" fontSize={{ base: "md", md: "xl" }} variant="secondary">
            <Trans
              i18nKey="feature-2:section-1-subtitle"
              components={[<Box key={0} mb={6} as="p" />, <Box key={1} as="p" />]}
            />
          </Heading>
        }
        imageProps={{
          src: "http://placekitten.com/g/1100/600",
          alt: "",
          width: { base: "100%", md: 1100 },
          height: { base: "320", md: 600 },
        }}
        imageLocation="right"
      />
      <ImageSection
        variant="transparent"
        py={py}
        heading={
          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={{ base: 4, md: 10 }}>
            {t("section-2-heading")}
          </Heading>
        }
        subtitle={
          <Heading as="h3" fontSize={{ base: "md", md: "xl" }} variant="secondary">
            <Trans
              i18nKey="feature-2:section-2-subtitle"
              components={[<Box key={0} mb={6} as="p" />, <Box key={1} as="p" />]}
            />
          </Heading>
        }
        imageProps={{
          src: "http://placekitten.com/g/1100/600",
          alt: "",
          width: { base: "100%", md: 1100 },
          height: { base: "320", md: 600 },
        }}
        imageLocation="left"
      />
      <Features title={t("features-section-heading")} subtitle={t("features-section-subtitle")} py={py} />
      <Section variant="transparent" py={py}>
        <CtaCard backgroundColor={cardBackgroundColor} heading={t("cta-heading")} subtitle={t("cta-subtitle")}>
          <ButtonLink href="/login" colorScheme="primary">
            {t("cta-button-text")}
          </ButtonLink>
        </CtaCard>
      </Section>
    </>
  );
}

Feature2Page.getLayout = getLayout;
