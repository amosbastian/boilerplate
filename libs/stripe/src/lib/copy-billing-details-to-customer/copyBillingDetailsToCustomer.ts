import { prisma } from "@boilerplate/api/utility";
import Stripe from "stripe";
import { stripe } from "../stripe/stripe";

// FIXME: import from Prisma
type InputJsonObject = any;

export const copyBillingDetailsToCustomer = async (userId: string, paymentMethod: Stripe.PaymentMethod) => {
  const customer = paymentMethod.customer;

  if (!customer) {
    return;
  }

  const { name, phone, address } = paymentMethod.billing_details;

  await stripe.customers.update(typeof customer === "string" ? customer : customer.id, {
    name: name ?? undefined,
    phone: phone ?? undefined,
    address: (address as any) ?? undefined,
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      billingAddress: address as InputJsonObject,
      paymentMethod: paymentMethod[paymentMethod.type] as InputJsonObject,
    },
  });
};
