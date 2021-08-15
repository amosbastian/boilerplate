import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../stripe/stripe";

export const createPortalLink = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const token = req.headers.token;

    try {
      // TODO: get user from token, then get customer and create billing portal session
      const customer = "customer";

      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/billing`,
      });

      return res.status(200).json({ url });
    } catch (error) {
      res.status(500).json({ error: { statusCode: 500, message: error.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
