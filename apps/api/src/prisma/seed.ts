import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

export const prisma = new PrismaClient();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "secretKey", {
  apiVersion: "2020-08-27",
});

async function main() {
  const products = await stripe.products.list();
  const prices = await stripe.prices.list();

  // User used for testing, get the ID and email after logging in with Kratos
  await prisma.user.create({ data: { id: "7d2c291f-9667-45ea-8b05-ab959e4bb568", email: "testuser@boilerplate.com" } });

  await Promise.all(
    products.data.map((each) =>
      prisma.product.upsert({
        where: {
          id: each.id,
        },
        create: {
          id: each.id,
          name: each.name,
          description: each.description,
          active: each.active,
          image: each.images?.[0],
          metadata: each.metadata,
        },
        update: {
          name: each.name,
          description: each.description,
          active: each.active,
          image: each.images?.[0],
          metadata: each.metadata,
        },
      }),
    ),
  );

  await Promise.all(
    prices.data.map((each) =>
      prisma.price.upsert({
        where: {
          id: each.id,
        },
        create: {
          id: each.id,
          currency: each.currency,
          active: each.active,
          type: each.type.toUpperCase() as any,
          unitAmount: each.unit_amount ?? 0,
          recurring: each.recurring as any,
          product: {
            connect: {
              id: each.product as string,
            },
          },
          metadata: each.metadata,
        },
        update: {
          currency: each.currency,
          active: each.active,
          type: each.type.toUpperCase() as any,
          unitAmount: each.unit_amount ?? 0,
          recurring: each.recurring as any,
        },
      }),
    ),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
