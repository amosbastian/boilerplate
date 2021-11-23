import { DocumentType, gql } from "@boilerplate/generated/graphql";
import { useProvidedStyles } from "@boilerplate/shared/theme";
import type { CardProps } from "@boilerplate/shared/ui";
import { Card } from "@boilerplate/shared/ui";
import { currencyToSymbol, oryBrowserClient } from "@boilerplate/site/utility";
import { Box, Button, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import type { AxiosError } from "axios";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";
import { RiCheckFill } from "react-icons/ri";

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

const ProductCardProductFragment = gql(/* GraphQL */ `
  fragment ProductCardProductFragment on Product {
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

export interface ProductCardProps {
  plan: DocumentType<typeof ProductCardProductFragment>;
  recommended?: boolean;
}

export function ProductCard({ plan, recommended = false, ...rest }: ProductCardProps & CardProps) {
  const { t } = useTranslation("pricing");
  const styles = useProvidedStyles({ name: "card" });
  const [hasSession, setHasSession] = React.useState<boolean>(false);

  const planName = plan.name.toLowerCase();
  const planPrice = plan.prices.find((price) => price.recurring.interval === "month");

  const borderWidth = useColorModeValue(1, 0);
  const router = useRouter();

  React.useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: session } = await oryBrowserClient.toSession();
        setHasSession(Boolean(session.active));
      } catch (error) {
        switch ((error as AxiosError).response?.status) {
          case 403:
            // This is a legacy error code thrown.
            break;
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // it's second factor
            return router.push("/login?aal=aal2");
          case 401:
            // do nothing, the user is not logged in
            break;
        }

        setHasSession(false);
      }
    };

    fetchSession();
  }, [router]);

  const handleCheckout = () => {
    if (!hasSession) {
      return router.push("/login");
    }

    return router.push("/settings/billing");
  };

  return (
    <Card
      sx={{
        ...styles,
        borderWidth: recommended ? 2 : borderWidth,
        borderColor: recommended ? "primary.500" : "gray.200",
      }}
      px={{ base: 6, sm: 8, md: 12 }}
      py={{ base: 6, md: 12 }}
      textAlign="left"
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
            values={{
              currencySymbol: currencyToSymbol(planPrice?.currency ?? "gbp"),
              price: (planPrice?.unitAmount ?? 0) / 100,
            }}
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
      <Button
        data-testid={`${planName}-button`}
        colorScheme={recommended ? "primary" : "gray"}
        isFullWidth
        onClick={handleCheckout}
      >
        {t(`${planName}-cta-button-text`)}
      </Button>
    </Card>
  );
}

export default ProductCard;
