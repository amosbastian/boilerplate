import type { ProductCreateInput } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const createProduct = async (prisma: PrismaClient, props?: Partial<ProductCreateInput>) => {
  const defaultProps: ProductCreateInput = {
    id: faker.datatype.uuid(),
    active: true,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    metadata: {},
    ...props,
  };

  return prisma.product.create({ data: { ...defaultProps, ...props } });
};
