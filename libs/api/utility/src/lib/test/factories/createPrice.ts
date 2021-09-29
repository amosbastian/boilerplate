import { Price, PriceCreateInput, PriceType } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";
import { createProduct } from "./createProduct";

export const createPrice = async (
  prisma: PrismaClient,
  props: Partial<Omit<PriceCreateInput, "id">> = {},
): Promise<Price> => {
  const defaultProps = {
    id: faker.datatype.uuid(),
    active: true,
    currency: "EUR",
    recurring: {},
    type: PriceType.RECURRING,
    unitAmount: faker.datatype.number({ min: 100, max: 1000 }),
    metadata: {},
    ...props,
  };

  if (!props.product) {
    const product = await createProduct(prisma);
    defaultProps.product = { connect: { id: product.id } };
  }

  return prisma.price.create({ data: { ...defaultProps, ...props } as PriceCreateInput });
};
