import { ButtonLink, Section } from "@boilerplate/shared/ui";
import { Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RiArrowRightLine, RiMailCheckLine } from "react-icons/ri";

const VerifyRequest = () => {
  const { t } = useTranslation("verify");
  const color = useColorModeValue("primary.500", "primary.200");

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
      <Icon boxSize={6} color={color} as={RiMailCheckLine} />
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
};

export default VerifyRequest;
