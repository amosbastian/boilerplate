import { prisma } from "@boilerplate/api/utility";
import Stripe from "stripe";

export const upsertProduct = async (
  product: Pick<Stripe.Product, "id" | "active" | "name" | "description" | "images" | "metadata">,
) => {
  const input = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description,
    image: product.images?.[0] ?? null,
    metadata: product.metadata,
  };

  await prisma.product.upsert({
    where: { id: product.id },
    create: input,
    update: input,
  });

  console.log(`Product inserted/updated: ${product.id}`);
};
