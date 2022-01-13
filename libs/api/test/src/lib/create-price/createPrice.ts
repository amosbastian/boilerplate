import { PriceType } from "@generated/type-graphql";
import { Prisma, PrismaClient } from "@prisma/client";
import * as faker from "faker";
import { ProductFactory } from "../create-product/createProduct";

export const PriceFactory = {
  build: (props?: Omit<Prisma.PriceCreateArgs, "data"> & { data?: Partial<Prisma.PriceCreateArgs["data"]> }) => {
    const defaultProps: Partial<Prisma.PriceCreateArgs["data"]> = {
      id: faker.datatype.uuid(),
      active: true,
      currency: "EUR",
      recurring: {},
      type: PriceType.RECURRING,
      unitAmount: faker.datatype.number({ min: 100, max: 1000 }),
      metadata: {},
      ...props?.data,
    };

    if (!defaultProps.product) {
      const product = ProductFactory.build();
      defaultProps.product = { create: { ...product } };
    }

    return defaultProps as Prisma.PriceCreateArgs["data"];
  },

  create: async (
    prisma: PrismaClient,
    props?: Omit<Prisma.PriceCreateArgs, "data"> & { data?: Partial<Prisma.PriceCreateArgs["data"]> },
  ) => {
    const data = PriceFactory.build(props);

    const price = await prisma.price.create({ ...props, data });

    return price;
  },
};
