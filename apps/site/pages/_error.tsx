import { ButtonLink, Section } from "@boilerplate/shared/ui";
import { Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import type { NextPageContext } from "next";

function Error({ statusCode }) {
  const { t } = useTranslation("404");
  const statusColor = useColorModeValue("primary.500", "primary.200");

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
      <Text color={statusColor} mb={4} fontWeight="medium">
        {statusCode}
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
