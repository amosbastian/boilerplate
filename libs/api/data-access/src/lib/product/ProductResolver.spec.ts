import "reflect-metadata";
import { createPrice, createProduct, createTestContext } from "@boilerplate/api/test";
import { gql } from "apollo-server-express";

const ctx = createTestContext();

describe("ProductResolver", () => {
  describe("product", () => {
    it("should return the product matching the given filter", async () => {
      const product = await createProduct(ctx.prisma);

      const ProductQuery = gql`
        query Product($where: ProductWhereUniqueInput!) {
          product(where: $where) {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(ProductQuery, { variables: { where: { id: product.id } } });

      expect(queryResult).toEqual({
        data: {
          product: {
            id: product.id,
          },
        },
      });
    });
  });

  describe("products", () => {
    it("should return a list of products matching the given filter", async () => {
      const product1 = await createProduct(ctx.prisma);
      const product2 = await createProduct(ctx.prisma);

      const ProductsQuery = gql`
        query Products {
          products {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(ProductsQuery);

      expect(queryResult).toEqual({
        data: {
          products: expect.arrayContaining([{ id: product1.id }, { id: product2.id }]),
        },
      });
    });
  });

  describe("prices", () => {
    it("should return a list of the product's prices", async () => {
      const product = await createProduct(ctx.prisma);
      const price1 = await createPrice(ctx.prisma, { product: { connect: { id: product.id } } });
      const price2 = await createPrice(ctx.prisma, { product: { connect: { id: product.id } } });

      const ProductPricesQuery = gql`
        query ProductPrices($where: ProductWhereUniqueInput!) {
          product(where: $where) {
            prices {
              id
            }
          }
        }
      `;

      const queryResult = await ctx.client.query(ProductPricesQuery, { variables: { where: { id: product.id } } });

      expect(queryResult).toEqual({
        data: {
          product: {
            prices: expect.arrayContaining([{ id: price1.id }, { id: price2.id }]),
          },
        },
      });
    });
  });
});
