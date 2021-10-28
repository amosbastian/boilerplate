import { prisma } from "@boilerplate/api/utility";
import { PriceType } from "@boilerplate/generated/graphql";
import { logger } from "@boilerplate/shared/utility/logger";
import Stripe from "stripe";

export type UpsertPriceInput = Pick<
  Stripe.Price,
  "id" | "product" | "active" | "currency" | "type" | "unit_amount" | "metadata"
> & {
  recurring: Pick<Stripe.Price.Recurring, "interval" | "interval_count">;
};

export const upsertPrice = async (price: UpsertPriceInput) => {
  const input = {
    id: price.id,
    product: {
      connect: { id: price.product as string },
    },
    active: price.active,
    currency: price.currency,
    type: price.type === "one_time" ? PriceType.OneTime : PriceType.Recurring,
    unitAmount: price.unit_amount ?? 0,
    recurring: {
      interval: price.recurring?.interval ?? null,
      intervalCount: price.recurring?.interval_count ?? null,
    },
    metadata: price.metadata,
  };

  await prisma.price.upsert({
    where: { id: price.id },
    create: input,
    update: input,
  });

  logger.info(`Price inserted/updated: ${price.id}`);
};
