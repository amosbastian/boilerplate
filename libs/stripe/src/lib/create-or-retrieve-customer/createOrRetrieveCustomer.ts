import { prisma } from "@boilerplate/api/utility";
import { logger } from "@boilerplate/shared/utility/logger";
import Stripe from "stripe";
import { stripe } from "../stripe/stripe";

export const createOrRetrieveCustomer = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    const error = new Error(`No user found for id: ${userId}`);
    logger.error("createOrRetrieveCustomer", { error });
    throw error;
  }

  if (user.stripeCustomerId) {
    return user.stripeCustomerId;
  }

  const customerData: Stripe.CustomerCreateParams = {
    metadata: {
      userId,
    },
  };

  if (user.email) {
    customerData.email = user.email;
  }

  const customer = await stripe.customers.create(customerData);

  await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId: customer.id } });

  logger.info(`New customer created and inserted for ${userId}.`);

  return customer.id;
};
