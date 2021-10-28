import { logger } from "@boilerplate/shared/utility/logger";
import { createOrRetrieveCustomer, stripe } from "@boilerplate/stripe";
import type { Express } from "express";
import { decode } from "next-auth/jwt";

export function addCreateCheckoutSession(app: Express) {
  app.post("/api/stripe/create-checkout-session", async (request, response) => {
    const token = request.cookies["next-auth.session-token"];

    if (!token || token === "null" || !process.env.JWT_SECRET) {
      return response.status(500).json({ error: { statusCode: 500, message: "Invalid token" } });
    }

    const { price, quantity = 1, metadata = {} } = request.body;

    try {
      const decodedToken = await decode({
        token,
        secret: process.env.JWT_SECRET,
        signingKey: process.env.JWT_SIGNING_KEY,
        encryptionKey: process.env.JWT_ENCRYPTION_KEY,
      });

      if (!decodedToken.sub) {
        return response.status(500).json({ error: { statusCode: 500, message: "Invalid userId" } });
      }

      const customer = await createOrRetrieveCustomer({ userId: decodedToken.sub });

      const session = await stripe.checkout.sessions.create({
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
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/billing`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/billing`,
      });

      return response.status(200).json({ sessionId: session.id });
    } catch (error: any) {
      logger.error("Stripe create checkout session", { error });
      response.status(500).json({ error: { statusCode: 500, message: error.message } });
    }
  });
}
