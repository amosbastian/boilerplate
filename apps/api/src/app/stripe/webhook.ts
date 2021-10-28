import { logger } from "@boilerplate/shared/utility/logger";
import {
  manageSubscriptionStatusChange,
  stripe,
  upsertPrice,
  UpsertPriceInput,
  upsertProduct,
} from "@boilerplate/stripe";
import type { Express } from "express";
import * as express from "express";
import Stripe from "stripe";

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

export function addStripeWebhook(app: Express) {
  app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), async (request, response) => {
    const signature = request.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_LIVE ?? process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(request.body, signature as string, webhookSecret as string);
    } catch (error: any) {
      logger.error("Stripe webhook", { error });
      return response.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case "product.created":
          case "product.updated":
            await upsertProduct(event.data.object as Stripe.Product);
            break;
          case "price.created":
          case "price.updated":
            await upsertPrice(event.data.object as UpsertPriceInput);
            break;
          case "customer.subscription.created":
          case "customer.subscription.updated":
          case "customer.subscription.deleted":
            await manageSubscriptionStatusChange(
              (event.data.object as Stripe.Subscription).id,
              (event.data.object as Stripe.Subscription).customer as string,
              event.type === "customer.subscription.created",
            );
            break;
          case "checkout.session.completed":
            if ((event.data.object as Stripe.Checkout.Session).mode === "subscription") {
              await manageSubscriptionStatusChange(
                (event.data.object as Stripe.Checkout.Session).subscription as string,
                (event.data.object as Stripe.Checkout.Session).customer as string,
                true,
              );
            }
            break;
          default:
            throw new Error(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }
      } catch (error) {
        logger.error("Stripe webhook", { error });
        return response.status(400).send('Webhook error: "Webhook handler failed."');
      }
    }

    response.json({ received: true });
  });
}
