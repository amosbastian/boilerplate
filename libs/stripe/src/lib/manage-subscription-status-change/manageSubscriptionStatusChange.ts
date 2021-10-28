import { prisma } from "@boilerplate/api/utility";
import { SubscriptionStatus } from "@boilerplate/generated/graphql";
import { logger } from "@boilerplate/shared/utility/logger";
import Stripe from "stripe";
import { copyBillingDetailsToCustomer } from "../copy-billing-details-to-customer/copyBillingDetailsToCustomer";
import { stripe } from "../stripe/stripe";

export const toDateTime = (seconds: number) => {
  const dateTime = new Date("1970-01-01T00:30:00Z"); // Epoch start
  dateTime.setSeconds(seconds);
  return dateTime;
};

export const manageSubscriptionStatusChange = async (
  subscriptionId: string,
  customerId: string,
  createAction = false,
) => {
  const user = await prisma.user.findUnique({ where: { stripeCustomerId: customerId } });

  if (!user) {
    const error = new Error(`No user found for stripeCustomerId: ${customerId}`);
    logger.error("manageSubscriptionStatusChange", { error });
    throw error;
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["default_payment_method"],
  });

  // Upsert the latest status of the subscription object
  const subscriptionData = {
    id: subscription.id,
    userId: user.id,
    metadata: subscription.metadata,
    status: subscription.status.toUpperCase() as SubscriptionStatus,
    priceId: subscription.items.data[0].price.id,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
    cancelAt: subscription.cancel_at ? toDateTime(subscription.cancel_at) : null,
    cancelledAt: subscription.canceled_at ? toDateTime(subscription.canceled_at) : null,
    currentPeriodStart: toDateTime(subscription.current_period_start),
    currentPeriodEnd: toDateTime(subscription.current_period_end),
    endedAt: subscription.ended_at ? toDateTime(subscription.ended_at) : null,
    trialStart: subscription.trial_start ? toDateTime(subscription.trial_start) : null,
    trialEnd: subscription.trial_end ? toDateTime(subscription.trial_end) : null,
  };

  await prisma.subscription.upsert({
    where: { id: subscription.id },
    create: subscriptionData,
    update: subscriptionData,
  });

  logger.info(`Inserted/updated subscription [${subscription.id}] for user [${user.id}]`);

  // For a new subscription copy the billing details to the customer object.
  if (createAction && subscription.default_payment_method) {
    await copyBillingDetailsToCustomer(user.id, subscription.default_payment_method as Stripe.PaymentMethod);
  }

  return;
};
