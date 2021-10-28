import "reflect-metadata";
import { createPrice, createProduct, createTestContext } from "@boilerplate/api/test";
import * as faker from "faker";
import { upsertPrice } from "./upsertPrice";

const ctx = createTestContext();

describe("upsertPrice", () => {
  it("should create a new price if it does not already exist", async () => {
    const product = await createProduct(ctx.prisma);
    const priceId = faker.datatype.uuid();

    await upsertPrice({
      id: priceId,
      metadata: {},
      active: true,
      type: "one_time",
      unit_amount: 100,
      currency: "usd",
      product: product.id,
      recurring: {
        interval: "month",
        interval_count: 1,
      },
    });

    const upsertedPrice = await ctx.prisma.price.findUnique({ where: { id: priceId } });

    expect(upsertedPrice).toBeDefined();
  });

  it("should update an existing price if it already exists", async () => {
    const price = await createPrice(ctx.prisma);

    await upsertPrice({
      id: price.id,
      metadata: {},
      active: false,
      type: "one_time",
      unit_amount: 100,
      currency: "usd",
      product: price.productId,
      recurring: {
        interval: "month",
        interval_count: 1,
      },
    });

    const upsertedPrice = await ctx.prisma.price.findUnique({ where: { id: price.id } });

    expect(upsertedPrice).toBeDefined();
    expect(upsertedPrice?.active).toBe(false);
  });
});
