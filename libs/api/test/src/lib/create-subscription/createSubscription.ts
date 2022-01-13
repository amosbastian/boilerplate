import { SubscriptionStatus } from "@generated/type-graphql";
import { Prisma, PrismaClient } from "@prisma/client";
import * as faker from "faker";
import { PriceFactory } from "../create-price/createPrice";
import { UserFactory } from "../create-user/createUser";

export const SubscriptionFactory = {
  build: (
    props?: Omit<Prisma.SubscriptionCreateArgs, "data"> & { data?: Partial<Prisma.SubscriptionCreateArgs["data"]> },
  ) => {
    const defaultProps: Partial<Prisma.SubscriptionCreateArgs["data"]> = {
      id: faker.datatype.uuid(),
      currentPeriodStart: faker.date.past(),
      currentPeriodEnd: faker.date.future(),
      cancelAtPeriodEnd: faker.datatype.boolean(),
      metadata: faker.random.objectElement(),
      status: SubscriptionStatus.ACTIVE,
      ...props?.data,
    };

    if (!defaultProps.price) {
      const price = PriceFactory.build();
      defaultProps.price = { create: { ...price } };
    }

    if (!defaultProps.user) {
      const user = UserFactory.build();
      defaultProps.user = { create: { ...user } };
    }

    return defaultProps as Prisma.SubscriptionCreateArgs["data"];
  },

  create: async (
    prisma: PrismaClient,
    props?: Omit<Prisma.SubscriptionCreateArgs, "data"> & { data?: Partial<Prisma.SubscriptionCreateArgs["data"]> },
  ) => {
    const data = SubscriptionFactory.build(props);

    const subscription = await prisma.subscription.create({ ...props, data });

    return subscription;
  },
};
