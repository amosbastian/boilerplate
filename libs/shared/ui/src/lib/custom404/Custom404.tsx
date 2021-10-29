import { Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { ButtonLink, Section } from "../../";

export function Custom404() {
  const { t } = useTranslation("404");
  const color404 = useColorModeValue("primary.500", "primary.200");

  return (
    <Section
      variant="transparent"
      h="100%"
      containerProps={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text color={color404} mb={4} fontWeight="medium">
        404
      </Text>
      <Heading textAlign="center" mb={4}>
        {t("heading")}
      </Heading>
      <Text variant="secondary" fontSize="md" mb={8}>
        {t("subtitle")}
      </Text>
      <ButtonLink href="/" rightIcon={<Icon as={RiArrowRightLine} />}>
        {t("common:go-back-home")}
      </ButtonLink>
    </Section>
  );
}

export default Custom404;
