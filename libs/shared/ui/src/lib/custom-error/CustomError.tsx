import { Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiArrowRightLine } from "react-icons/ri";
import { ButtonLink, Section } from "../../";

export interface CustomErrorProps {
  statusCode: number;
}

export function CustomError({ statusCode }: CustomErrorProps) {
  const { t } = useTranslation(statusCode.toString());
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

export default CustomError;
