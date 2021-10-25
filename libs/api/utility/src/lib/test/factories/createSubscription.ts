import type { Subscription, SubscriptionCreateInput } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";
import { createUser } from "./createUser";

export const createSubscription = async (
  prisma: PrismaClient,
  props?: SubscriptionCreateInput,
): Promise<Subscription> => {
  const defaultProps: SubscriptionCreateInput = {
    currentPeriodStart: faker.date.past(),
    currentPeriodEnd: faker.date.future(),
    cancelAtPeriodEnd: faker.datatype.boolean(),
    metadata: faker.random.objectElement(),
    price: faker.finance.amount(),
    status: "ACTIVE",
    ...props,
  };

  if (!props?.user) {
    const user = await createUser(prisma);
    defaultProps.user = { connect: { id: user.id } };
  }

  return prisma.subscription.create({ data: { ...defaultProps, ...props } });
};
