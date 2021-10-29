import "reflect-metadata";
import { createPrice, createProduct, createTestContext } from "@boilerplate/api/test";
import { gql } from "apollo-server-express";

const ctx = createTestContext();

describe("PriceResolver", () => {
  describe("price", () => {
    it("should return the price matching the given filter", async () => {
      const price = await createPrice(ctx.prisma);

      const PriceQuery = gql`
        query Price($where: PriceWhereUniqueInput!) {
          price(where: $where) {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(PriceQuery, { variables: { where: { id: price.id } } });

      expect(queryResult).toEqual({
        data: {
          price: {
            id: price.id,
          },
        },
      });
    });
  });

  describe("product", () => {
    it("should return the price's product", async () => {
      const product = await createProduct(ctx.prisma);
      const price = await createPrice(ctx.prisma, { product: { connect: { id: product.id } } });

      const PriceProductQuery = gql`
        query PriceProduct($where: PriceWhereUniqueInput!) {
          price(where: $where) {
            product {
              id
            }
          }
        }
      `;

      const queryResult = await ctx.client.query(PriceProductQuery, { variables: { where: { id: price.id } } });

      expect(queryResult).toEqual({
        data: {
          price: {
            product: {
              id: product.id,
            },
          },
        },
      });
    });
  });
});
