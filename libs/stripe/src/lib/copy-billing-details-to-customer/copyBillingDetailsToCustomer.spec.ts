import "reflect-metadata";
import { createTestContext, createUser } from "@boilerplate/api/test";
import * as faker from "faker";
import Stripe from "stripe";
import { copyBillingDetailsToCustomer } from "./copyBillingDetailsToCustomer";
import { stripe } from "../stripe/stripe";

jest.mock("../stripe/stripe");

const ctx = createTestContext();

describe("copyBillingDetailsToCustomer", () => {
  const userAddress = {
    city: faker.address.city(),
    country: faker.address.country(),
    line1: faker.address.streetAddress(),
    line2: null,
    postal_code: faker.address.zipCode(),
    state: null,
  };
  const userCard = {
    brand: "visa",
    checks: {
      address_line1_check: "pass",
      address_postal_code_check: "pass",
      cvc_check: "pass",
    },
    country: "US",
    exp_month: 4,
    exp_year: 2024,
    fingerprint: faker.datatype.uuid(),
    funding: "credit",
    generated_from: null,
    last4: "4242",
    networks: {
      available: ["visa"],
      preferred: null,
    },
    three_d_secure_usage: {
      supported: true,
    },
    wallet: null,
  };
  const userName = faker.name.findName();
  const userPhone = faker.phone.phoneNumber();

  const paymentMethod = {
    id: faker.datatype.uuid(),
    object: "payment_method" as Stripe.PaymentMethod["object"],
    billing_details: {
      address: userAddress,
      email: faker.internet.email(),
      name: userName,
      phone: userPhone,
    },
    card: userCard,
    created: faker.date.recent().getDate(),
    customer: faker.datatype.uuid(),
    livemode: false,
    metadata: {},
    type: "card" as Stripe.PaymentMethod["type"],
  };

  it("should copy billing details to customer", async () => {
    const user = await createUser(ctx.prisma);

    await copyBillingDetailsToCustomer(user.id, paymentMethod);
    const updatedUser = await ctx.prisma.user.findUnique({ where: { id: user.id } });

    expect(updatedUser?.billingAddress).toEqual(userAddress);
    expect(stripe.customers.update).toHaveBeenCalledWith(paymentMethod.customer, {
      name: userName,
      phone: userPhone,
      address: userAddress,
    });
  });

  it("should not copy billing details to customer if no customer exists", async () => {
    const user = await createUser(ctx.prisma);

    await copyBillingDetailsToCustomer(user.id, { ...paymentMethod, customer: null });
    const updatedUser = await ctx.prisma.user.findUnique({ where: { id: user.id } });

    expect(updatedUser?.billingAddress).toEqual(user.billingAddress);
    expect(stripe.customers.update).toHaveBeenCalledTimes(0);
  });
});
