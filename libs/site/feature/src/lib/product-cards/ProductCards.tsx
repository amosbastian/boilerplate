import { gql } from "@boilerplate/generated/graphql";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProductCard } from "@boilerplate/site/ui";
import { Grid } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/react";

const ProductsQuery = gql(/* GraphQL */ `
  query Products {
    products {
      id
      ...ProductCardProductFragment
    }
  }
`);

export type ProductCardsProps = GridProps;

export function ProductCards(props: ProductCardsProps) {
  const { data } = useGraphqlQuery(ProductsQuery);

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={8} position="relative" {...props}>
      <ProductCard
        plan={{
          id: "",
          name: "free",
          prices: [{ currency: "EUR", unitAmount: 0, recurring: { interval: "monthly" } }],
          metadata: {},
        }}
      />
      {data?.products.map((plan, index) => (
        <ProductCard plan={plan} recommended={index === 0} position="relative" top={index === 0 ? -8 : 0} />
      ))}
    </Grid>
  );
}

export default ProductCards;
