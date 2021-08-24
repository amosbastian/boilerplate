import { DocumentType, gql } from "@boilerplate/generated/graphql";
import type { CardProps } from "@boilerplate/shared/ui";
import { Card } from "@boilerplate/shared/ui";
import { Box, Button, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { RiCheckFill } from "react-icons/ri";

const currencyMap: Record<string, string> = {
  EUR: "€",
  GBP: "£",
  USD: "$",
};

const featuresMap: Record<string, { name: string }[]> = {
  free: [{ name: "free-feature-1" }, { name: "free-feature-2" }, { name: "free-feature-3" }],
  basic: [
    { name: "basic-feature-1" },
    { name: "basic-feature-2" },
    { name: "basic-feature-3" },
    { name: "basic-feature-4" },
  ],
  premium: [{ name: "premium-feature-1" }, { name: "premium-feature-2" }, { name: "premium-feature-3" }],
};

export const PlanCardProductFragment = gql(/* GraphQL */ `
  fragment PlanCardProductFragment on Product {
    id
    name
    metadata
    prices {
      currency
      recurring
      unitAmount
    }
  }
`);

export interface PlanCardProps {
  plan: DocumentType<typeof PlanCardProductFragment>;
  recommended?: boolean;
}

export function PlanCard({ plan, recommended = false, ...rest }: PlanCardProps & CardProps) {
  const { t } = useTranslation("pricing");
  const backgroundColor = useColorModeValue("gray.100", "gray.800");

  const planName = plan.name.toLowerCase();
  const planPrice = plan.prices.find((price) => price.recurring.interval === "month");

  return (
    <Card
      px={{ base: 6, sm: 8, md: 12 }}
      py={{ base: 6, md: 12 }}
      backgroundColor={backgroundColor}
      textAlign="left"
      borderWidth={recommended ? 2 : 0}
      borderColor="primary.500"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      {...rest}
    >
      <Box>
        <Heading as="h2" size="md" mb={4}>
          {t(`common:${planName}`)}
        </Heading>
        <Text mb={2}>{t(`${planName}-description`)}</Text>
        <Box mb={8} display="flex" alignItems="baseline">
          <Trans
            i18nKey="common:price-per-month"
            components={[
              <Text key="0" fontSize="6xl" fontWeight="bold" />,
              <Text key="1" ml={1} pb={1} fontWeight="bold" />,
            ]}
            values={{ currencySymbol: currencyMap[planPrice?.currency ?? "GBP"], price: planPrice?.unitAmount ?? 0 }}
          />
        </Box>
        <List spacing={3} mb={8}>
          {featuresMap[planName].map((feature, index) => (
            <ListItem key={feature.name} display="flex" alignItems="center">
              <ListIcon mr={4} mt={1} as={RiCheckFill} boxSize={5} color="primary.500" />
              {t(`${planName}-feature-${index + 1}`)}
            </ListItem>
          ))}
        </List>
      </Box>
      <Button colorScheme={recommended ? "primary" : "gray"} isFullWidth>
        {t(`${planName}-cta-button-text`)}
      </Button>
    </Card>
  );
}

export default PlanCard;
