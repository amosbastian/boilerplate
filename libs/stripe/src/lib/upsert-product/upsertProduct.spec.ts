import "reflect-metadata";
import { upsertProduct } from "./upsertProduct";
import { createTestContext, createProduct } from "@boilerplate/api/test";
import * as faker from "faker";

const ctx = createTestContext();

describe("upsertProduct", () => {
  it("should create a new price if it does not already exist", async () => {
    const id = faker.datatype.uuid();

    await upsertProduct({
      id,
      active: true,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      images: [],
      metadata: {},
    });

    const upsertedProduct = await ctx.prisma.product.findUnique({ where: { id: id } });

    expect(upsertedProduct).toBeDefined();
  });

  it("should update an existing price if it already exists", async () => {
    const product = await createProduct(ctx.prisma);

    await upsertProduct({
      id: product.id,
      active: false,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      images: [],
      metadata: {},
    });

    const upsertedProduct = await ctx.prisma.product.findUnique({ where: { id: product.id } });

    expect(upsertedProduct).toBeDefined();
    expect(upsertedProduct?.active).not.toEqual(product.active);
  });
});
