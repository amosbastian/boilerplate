import { prisma } from "@boilerplate/api/utility";
import { logger } from "@boilerplate/shared/utility/logger";
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

  logger.info(`Product upserted: ${product.id}`);
};
