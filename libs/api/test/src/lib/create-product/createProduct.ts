import { Prisma, PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const ProductFactory = {
  build: (props?: Omit<Prisma.ProductCreateArgs, "data"> & { data?: Partial<Prisma.ProductCreateArgs["data"]> }) => {
    const defaultProps: Prisma.ProductCreateArgs["data"] = {
      id: faker.datatype.uuid(),
      active: true,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      metadata: {},
      ...props?.data,
    };

    return defaultProps as Prisma.ProductCreateArgs["data"];
  },

  create: async (
    prisma: PrismaClient,
    props?: Omit<Prisma.ProductCreateArgs, "data"> & { data?: Partial<Prisma.ProductCreateArgs["data"]> },
  ) => {
    const data = ProductFactory.build(props);

    const product = await prisma.product.create({ ...props, data });

    return product;
  },
};
