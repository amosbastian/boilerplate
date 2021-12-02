import { DocumentType, gql } from "@boilerplate/generated/graphql";
import { configuration } from "@boilerplate/shared/configuration";
import { Card, CardContent, CardFooter, CardHeader } from "@boilerplate/shared/ui";
import { currencyToSymbol, fetcher, getStripePromise } from "@boilerplate/site/utility";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridProps,
  Icon,
  Stack,
  Switch,
  Text,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const PlanSettingsFormProductFragment = gql(/* GraphQL */ `
  fragment PlanSettingsFormProductFragment on Product {
    id
    name
    metadata
    prices {
      id
      currency
      recurring
      unitAmount
    }
  }
`);

const ProductRadioCard = ({
  children,
  price,
  product,
  ...rest
}: {
  children?: any;
  price: any;
  product: DocumentType<typeof PlanSettingsFormProductFragment>;
}) => {
  const planName = product.name.toLowerCase();
  const planPrice = price;

  const { t } = useTranslation("common");
  const { getInputProps, getCheckboxProps, state } = useRadio({ ...rest });

  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const color = useColorModeValue("gray.600", "whiteAlpha.700");
  const checkedColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const bg = useColorModeValue("gray.50", "gray.700");
  const priceColor = useColorModeValue("primary.800", "primary.100");

  return (
    <Box as="label">
      <input {...inputProps} />
      <Box
        {...(checkboxProps as any)}
        cursor="pointer"
        color={color}
        _checked={{
          color: checkedColor,
          borderColor: "primary.500",
          bg,
        }}
        borderRadius="md"
        borderWidth="2px"
        pl={3}
        pr={5}
        py={4}
        display="flex"
        alignItems="center"
      >
        {state.isChecked ? (
          <Icon mr={3} fontSize="lg" color="primary.400" as={MdRadioButtonChecked} />
        ) : (
          <Icon mr={3} fontSize="lg" as={MdRadioButtonUnchecked} />
        )}
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          <Text fontWeight="semibold">{t(`pricing:${planName}-description`)}</Text>
          <Text color={state.isChecked ? priceColor : "inherit"} fontWeight="semibold">
            <Trans
              i18nKey={price.recurring.interval === "month" ? "common:price-per-month" : "common:price-per-year"}
              components={[<></>, <></>]}
              values={{
                currencySymbol: currencyToSymbol(planPrice?.currency ?? "gbp"),
                price: (planPrice?.unitAmount ?? 0) / 100,
              }}
            />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const PlanSettingsFormUserFragment = gql(/* GraphQL */ `
  fragment PlanSettingsFormUserFragment on User {
    id
    email
    subscription {
      id
      status
      price {
        id
        currency
        unitAmount
        recurring
        product {
          name
        }
      }
    }
  }
`);

export interface PlanSettingsFormProps extends GridProps {
  products: DocumentType<typeof PlanSettingsFormProductFragment>[];
  user: DocumentType<typeof PlanSettingsFormUserFragment>;
}

export function PlanSettingsForm({ products, user, ...rest }: PlanSettingsFormProps) {
  const { t } = useTranslation("settings");
  const toast = useToast();
  const [loading, setLoading] = React.useState(false);
  const subscriptionName = user.subscription?.price?.product?.name ?? "Free";

  const [billingPeriod, setBillingPeriod] = React.useState<"month" | "year">("month");

  const [selectedPriceId, setSelectedPriceId] = React.useState<string | undefined>(
    products[0].prices.find((price) => price.recurring.interval === billingPeriod)?.id,
  );

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "plan",
    defaultValue: products[0].prices.find((price) => price.recurring.interval === billingPeriod)?.id,
    onChange: setSelectedPriceId,
  });

  const rootProps = getRootProps();

  const redirectToCustomerPortal = async () => {
    setLoading(true);

    const { url } = await fetcher({
      url: `${configuration.BASE_URL_API}/api/stripe/create-portal-link`,
      method: "POST",
    });

    // if (error) return alert(error.message);
    window.location.assign(url);
    setLoading(false);
  };

  const handleCheckout = async () => {
    setLoading(true);

    const stripe = await getStripePromise();

    const { sessionId } = await fetcher({
      url: `${configuration.BASE_URL_API}/api/stripe/create-checkout-session`,
      body: { price: selectedPriceId },
      method: "POST",
    });

    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
      toast({
        title: t("common:something-went-wrong"),
        description: result.error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  const handleBillingPeriodChange = () => {
    setBillingPeriod((oldBillingPeriod) => {
      const newBillingPeriod = oldBillingPeriod === "month" ? "year" : "month";
      const defaultPrice = products[0].prices.find((price) => price.recurring.interval === newBillingPeriod)?.id ?? "";

      setSelectedPriceId(defaultPrice);
      setValue(defaultPrice);

      return newBillingPeriod;
    });
  };

  return (
    <Card data-testid="plan-settings-form" as="form">
      <CardHeader
        title={t("plan-settings-title")}
        subtitle={t("plan-settings-subtitle", { subscriptionName })}
        action={user.subscription?.status ? <Badge>{user.subscription.status}</Badge> : undefined}
      />
      <CardContent {...rest}>
        {subscriptionName === "Free" && (
          <Stack {...(rootProps as any)} spacing={2}>
            {products.map((product) => {
              const planPrice = product.prices.find((price) => price.recurring.interval === billingPeriod);
              const radioProps = getRadioProps({ value: planPrice?.id });

              return <ProductRadioCard key={product.id} product={product} price={planPrice} {...radioProps} />;
            })}
            <Flex justifyContent="flex-end" pt={2}>
              <FormControl display="flex" alignItems="center" w="max-content" justifySelf="flex-end">
                <FormLabel htmlFor="billing-period" mb="0">
                  {billingPeriod === "month" ? t("common:switch-yearly-billing") : t("common:switch-monthly-billing")}
                </FormLabel>
                <Switch onChange={handleBillingPeriodChange} data-testid="billing-period" />
              </FormControl>
            </Flex>
          </Stack>
        )}
        {subscriptionName !== "Free" && (
          <Trans
            i18nKey={`common:price-per-${user.subscription?.price?.recurring.interval}`}
            components={[<></>, <></>]}
            values={{
              currencySymbol: currencyToSymbol(user.subscription?.price?.currency ?? "gbp"),
              price: (user.subscription?.price?.unitAmount ?? 0) / 100,
            }}
          />
        )}
      </CardContent>
      <CardFooter>
        <Button
          isLoading={loading}
          fontSize="sm"
          onClick={subscriptionName === "Free" ? handleCheckout : redirectToCustomerPortal}
        >
          {subscriptionName === "Free" ? t("upgrade-plan") : t("manage-plan")}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PlanSettingsForm;
