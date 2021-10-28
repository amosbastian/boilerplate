import "reflect-metadata";
import { createPrice, createSubscription, createTestContext, createUser, mockFunction } from "@boilerplate/api/test";
import { SubscriptionStatus } from "@boilerplate/generated/graphql";
import * as faker from "faker";
import Stripe from "stripe";
import { stripe } from "../stripe/stripe";
import { manageSubscriptionStatusChange } from "./manageSubscriptionStatusChange";

const mockedStripeSubscriptionsRetrieve = mockFunction(stripe.subscriptions.retrieve);

jest.mock("../stripe/stripe");

const ctx = createTestContext();

describe("manageSubscriptionStatusChange", () => {
  let subscription: any;
  let userAddress: any;

  beforeEach(async () => {
    const price = await createPrice(ctx.prisma);

    userAddress = {
      city: faker.address.city(),
      country: faker.address.country(),
      line1: faker.address.streetAddress(),
      line2: null,
      postal_code: faker.address.zipCode(),
      state: null,
    };

    subscription = {
      id: faker.datatype.uuid(),
      object: "subscription",
      application_fee_percent: null,
      automatic_tax: {
        enabled: false,
      },
      billing_cycle_anchor: faker.date.past().getDate(),
      billing_thresholds: null,
      cancel_at: null,
      cancel_at_period_end: false,
      canceled_at: null,
      collection_method: "charge_automatically",
      created: faker.date.past().getDate(),
      current_period_end: faker.date.past().getDate(),
      current_period_start: faker.date.past().getDate(),
      customer: "cus_KTtUbQTQlY2cKC",
      days_until_due: null,
      default_payment_method: {
        id: faker.datatype.uuid(),
        object: "payment_method",
        billing_details: {
          address: userAddress,
          email: faker.internet.email(),
          name: faker.name.findName(),
          phone: faker.phone.phoneNumber(),
        },
        card: {
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
        },
        created: faker.date.past().getDate(),
        customer: faker.datatype.uuid(),
        livemode: false,
        metadata: {},
        type: "card",
      },
      default_source: null,
      default_tax_rates: [],
      discount: null,
      ended_at: null,
      items: {
        object: "list",
        data: [
          {
            id: "si_KTtVJ5kGRrFOA8",
            object: "subscription_item",
            billing_thresholds: null,
            created: faker.date.past().getDate(),
            metadata: {},
            plan: {
              id: faker.datatype.uuid(),
              object: "plan",
              active: true,
              aggregate_usage: null,
              amount: 300,
              amount_decimal: "300",
              billing_scheme: "per_unit",
              created: faker.date.past().getDate(),
              currency: "eur",
              interval: "month",
              interval_count: 1,
              livemode: false,
              metadata: {},
              nickname: null,
              product: faker.datatype.uuid(),
              tiers_mode: null,
              transform_usage: null,
              trial_period_days: null,
              usage_type: "licensed",
            },
            price: {
              id: price.id,
              object: "price",
              active: true,
              billing_scheme: "per_unit",
              created: faker.date.past().getDate(),
              currency: "eur",
              livemode: false,
              lookup_key: null,
              metadata: {},
              nickname: null,
              product: faker.datatype.uuid(),
              recurring: {
                aggregate_usage: null,
                interval: "month",
                interval_count: 1,
                trial_period_days: null,
                usage_type: "licensed",
              },
              tax_behavior: "unspecified",
              tiers_mode: null,
              transform_quantity: null,
              type: "recurring",
              unit_amount: 300,
              unit_amount_decimal: "300",
            },
            quantity: 1,
            subscription: "123",
            tax_rates: [],
          },
        ],
        has_more: false,
        total_count: 1,
        url: "/v1/subscription_items?subscription=123",
      },
      latest_invoice: faker.datatype.uuid(),
      livemode: false,
      metadata: {},
      next_pending_invoice_item_invoice: null,
      pause_collection: null,
      payment_settings: {
        payment_method_options: null,
        payment_method_types: null,
      },
      pending_invoice_item_interval: null,
      pending_setup_intent: null,
      pending_update: null,
      plan: {
        id: faker.datatype.uuid(),
        object: "plan",
        active: true,
        aggregate_usage: null,
        amount: 300,
        amount_decimal: "300",
        billing_scheme: "per_unit",
        created: faker.date.past().getDate(),
        currency: "eur",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        nickname: null,
        product: faker.datatype.uuid(),
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: "licensed",
      },
      quantity: 1,
      schedule: null,
      start_date: faker.date.past().getDate(),
      status: "active",
      transfer_data: null,
      trial_end: null,
      trial_start: null,
    };
  });

  it("should create a subscription for the user if one does not already exist", async () => {
    const stripeCustomerId = faker.datatype.uuid();
    await createUser(ctx.prisma, { stripeCustomerId });

    mockedStripeSubscriptionsRetrieve.mockResolvedValueOnce(
      subscription as unknown as Stripe.Response<Stripe.Subscription>,
    );

    await manageSubscriptionStatusChange(subscription.id, stripeCustomerId);
    const createdSubscription = await ctx.prisma.subscription.findUnique({ where: { id: subscription.id } });

    expect(createdSubscription?.id).toEqual(subscription.id);
  });

  it("should update a subcription if it already exists", async () => {
    const stripeCustomerId = faker.datatype.uuid();
    const existingSubscription = await createSubscription(ctx.prisma);
    await createUser(ctx.prisma, { stripeCustomerId, subscription: { connect: { id: existingSubscription.id } } });

    mockedStripeSubscriptionsRetrieve.mockResolvedValueOnce({
      ...subscription,
      id: existingSubscription.id,
      status: SubscriptionStatus.Cancelled,
    } as unknown as Stripe.Response<Stripe.Subscription>);

    await manageSubscriptionStatusChange(subscription.id, stripeCustomerId);
    const updatedSubscription = await ctx.prisma.subscription.findUnique({ where: { id: existingSubscription.id } });

    expect(updatedSubscription?.id).toEqual(existingSubscription.id);
    expect(updatedSubscription?.status).toEqual(SubscriptionStatus.Cancelled);
  });

  it("should throw an error if the user does not have a `stripeCustomerId`", async () => {
    await createUser(ctx.prisma);

    await expect(manageSubscriptionStatusChange(subscription.id, "stripeCustomerId")).rejects.toThrowError();
  });

  it("should copy billing details to customer if `createAction` is true", async () => {
    const stripeCustomerId = faker.datatype.uuid();
    const createdUser = await createUser(ctx.prisma, { stripeCustomerId });

    mockedStripeSubscriptionsRetrieve.mockResolvedValueOnce(
      subscription as unknown as Stripe.Response<Stripe.Subscription>,
    );

    await manageSubscriptionStatusChange(subscription.id, stripeCustomerId, true);
    const updatedUser = await ctx.prisma.user.findUnique({ where: { id: createdUser.id } });

    expect(updatedUser?.billingAddress).toEqual(userAddress);
  });
});
