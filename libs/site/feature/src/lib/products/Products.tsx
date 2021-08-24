import { gql } from "@boilerplate/generated/graphql";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { PlanCard } from "@boilerplate/site/ui";
import { Grid } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/react";

const ProductsQuery = gql(/* GraphQL */ `
  query Products {
    products {
      id
      ...PlanCardProductFragment
    }
  }
`);

export type ProductsProps = GridProps;

export function Products(props: ProductsProps) {
  const { data } = useGraphqlQuery(ProductsQuery);

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={8} position="relative" {...props}>
      <PlanCard
        plan={{
          id: "",
          name: "free",
          prices: [{ currency: "EUR", unitAmount: 0, recurring: { interval: "monthly" } }],
          metadata: {},
        }}
      />
      {data?.products.map((plan, index) => (
        <PlanCard plan={plan} recommended={index === 0} position="relative" top={index === 0 ? -8 : 0} />
      ))}
    </Grid>
  );
}

export default Products;
