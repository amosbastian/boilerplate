import { createOrRetrieveCustomer, stripe } from "@boilerplate/stripe";
import type { Express } from "express";
import { decode } from "next-auth/jwt";

export function addCreatePortalLink(app: Express) {
  app.post("/api/stripe/create-portal-link", async (request, response) => {
    const token = request.cookies["next-auth.session-token"];

    if (!token || token === "null" || !process.env.JWT_SECRET) {
      return response.status(500).json({ error: { statusCode: 500, message: "Invalid token" } });
    }

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

      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/billing`,
      });

      return response.status(200).json({ url });
    } catch (error) {
      response.status(500).json({ error: { statusCode: 500, message: (error as any).message } });
    }
  });
}
