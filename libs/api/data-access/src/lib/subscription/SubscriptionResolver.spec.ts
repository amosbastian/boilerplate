import "reflect-metadata";
import { createPrice, createSubscription, createTestContext } from "@boilerplate/api/test";
import { gql } from "apollo-server-express";

const ctx = createTestContext();

describe("SubscriptionResolver", () => {
  describe("subscription", () => {
    it("should return the subscription matching the given filter", async () => {
      const subscription = await createSubscription(ctx.prisma);

      const SubscriptionQuery = gql`
        query Subscription($where: SubscriptionWhereUniqueInput!) {
          subscription(where: $where) {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(SubscriptionQuery, { variables: { where: { id: subscription.id } } });

      expect(queryResult).toEqual({
        data: {
          subscription: {
            id: subscription.id,
          },
        },
      });
    });
  });

  describe("price", () => {
    it("should return the price of the given subscription", async () => {
      const price = await createPrice(ctx.prisma);
      const subscription = await createSubscription(ctx.prisma, { price: { connect: { id: price.id } } });

      const SubscriptionPriceQuery = gql`
        query SubscriptionPrice($where: SubscriptionWhereUniqueInput!) {
          subscription(where: $where) {
            price {
              id
            }
          }
        }
      `;

      const queryResult = await ctx.client.query(SubscriptionPriceQuery, {
        variables: { where: { id: subscription.id } },
      });

      expect(queryResult).toEqual({
        data: {
          subscription: {
            price: {
              id: price.id,
            },
          },
        },
      });
    });
  });
});
