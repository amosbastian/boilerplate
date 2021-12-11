import { configuration } from "@boilerplate/shared/configuration";
import { logger } from "@boilerplate/shared/utility/logger";
import { oryApiClient } from "@boilerplate/shared/utility/ory";
import { createOrRetrieveCustomer, stripe } from "@boilerplate/stripe";
import type { Express } from "express";

export function addCreateCheckoutSession(app: Express) {
  app.post("/api/stripe/create-checkout-session", async (request, response) => {
    const { price, quantity = 1, metadata = {} } = request.body;

    try {
      const { data: orySession } = await oryApiClient.toSession(undefined, request.headers.cookie);

      const customer = await createOrRetrieveCustomer({ userId: orySession.identity.id });

      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        billing_address_collection: "required",
        customer,
        line_items: [
          {
            price,
            quantity,
          },
        ],
        mode: "subscription",
        allow_promotion_codes: true,
        subscription_data: {
          trial_from_plan: true,
          metadata,
        },
        success_url: `${configuration.BASE_URL_SITE}/settings/billing`,
        cancel_url: `${configuration.BASE_URL_SITE}/settings/billing`,
      });

      return response.status(200).json({ sessionId: checkoutSession.id });
    } catch (error: any) {
      logger.error("Stripe create checkout session", { error });
      response.status(500).json({ error: { statusCode: 500, message: error.message } });
    }
  });
}
