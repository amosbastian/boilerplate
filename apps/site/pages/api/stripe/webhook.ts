import { webhookHandler } from "@boilerplate/stripe";

// Stripe requires the raw body to construct the event
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhook = webhookHandler;

export default webhook;
