import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../stripe/stripe";

export const createCheckoutSession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const token = req.headers.token;
    const { price, quantity = 1, metadata = {} } = req.body;

    try {
      // TODO: get user from token, then get customer and create checkout session
      const customer = "customer";

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

      return res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
