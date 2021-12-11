import { configuration } from "@boilerplate/shared/configuration";
import { logger } from "@boilerplate/shared/utility/logger";
import { oryApiClient } from "@boilerplate/shared/utility/ory";
import { createOrRetrieveCustomer, stripe } from "@boilerplate/stripe";
import type { Express } from "express";

export function addCreatePortalLink(app: Express) {
  app.post("/api/stripe/create-portal-link", async (request, response) => {
    try {
      const { data: orySession } = await oryApiClient.toSession(undefined, request.headers.cookie);

      const customer = await createOrRetrieveCustomer({ userId: orySession.identity.id });

      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${configuration.BASE_URL_SITE}/settings/billing`,
      });

      return response.status(200).json({ url });
    } catch (error) {
      logger.error("Stripe create portal link", { error });
      response.status(500).json({ error: { statusCode: 500, message: (error as any).message } });
    }
  });
}
