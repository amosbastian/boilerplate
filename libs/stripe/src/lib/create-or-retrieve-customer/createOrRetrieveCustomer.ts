import { prisma } from "@boilerplate/api/utility";
import Stripe from "stripe";
import { stripe } from "../stripe/stripe";

export const createOrRetrieveCustomer = async ({ email, userId }: { email?: string; userId: string }) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error(`No user found for id: ${userId}`);
  }

  if (user.stripeCustomerId) {
    return user.stripeCustomerId;
  }

  const customerData: Stripe.CustomerCreateParams = {
    metadata: {
      userId,
    },
  };

  if (email) {
    customerData.email = email;
  }

  const customer = await stripe.customers.create(customerData);

  await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId: customer.id } });

  console.log(`New customer created and inserted for ${userId}.`);

  return customer.id;
};
