import { gql } from "@boilerplate/generated/graphql";

const ProductsQuery = gql(/* GraphQL */ `
  query Products {
    products {
      id
      ...PlanCardProductFragment
    }
  }
`);

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div>
      <h1>Welcome to Products!</h1>
    </div>
  );
}

export default Products;
