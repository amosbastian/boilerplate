import { gql } from "@boilerplate/generated/graphql";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProductCard } from "@boilerplate/site/ui";
import { Grid } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/react";

export const ProductsQuery = gql(/* GraphQL */ `
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
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
      gap={8}
      position="relative"
      justifyItems={{ base: "center", lg: "unset" }}
      {...props}
    >
      <ProductCard
        data-testid="product-card"
        plan={{
          id: "",
          name: "free",
          prices: [{ currency: "EUR", unitAmount: 0, recurring: { interval: "monthly" } }],
          metadata: {},
        }}
        w={{ md: "440px", lg: "100%" }}
      />
      {data?.products.map((plan, index) => (
        <ProductCard
          data-testid="product-card"
          key={plan.id}
          plan={plan}
          recommended={index === 0}
          position="relative"
          w={{ md: "440px", lg: "100%" }}
          top={{ lg: index === 0 ? -8 : 0 }}
        />
      ))}
    </Grid>
  );
}

export default ProductCards;
