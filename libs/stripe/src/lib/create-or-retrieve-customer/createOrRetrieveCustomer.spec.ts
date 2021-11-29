import "reflect-metadata";
import { createTestContext, createUser } from "@boilerplate/api/test";
import * as faker from "faker";
import { createOrRetrieveCustomer } from "./createOrRetrieveCustomer";

const ctx = createTestContext();

describe("createOrRetrieveCustomer", () => {
  it("should return existing stripeCustomerId if it exists", async () => {
    const stripeCustomerId = faker.datatype.uuid();
    const user = await createUser(ctx.prisma, { stripeCustomerId });

    const retrievedStripeCustomerId = await createOrRetrieveCustomer({ userId: user.id });

    expect(retrievedStripeCustomerId).toBe(stripeCustomerId);
  });

  it.skip("should update user with new stripeCustomerId if it did not already exist", async () => {
    const user = await createUser(ctx.prisma);

    const returnedCustomerId = await createOrRetrieveCustomer({ userId: user.id });
    // TODO: mock Stripe
    const updatedUser = await ctx.prisma.user.findUnique({ where: { id: user.id } });

    expect(updatedUser?.stripeCustomerId).toBe(returnedCustomerId);
  });
});
