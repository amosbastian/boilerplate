import type { SubscriptionCreateInput } from "@generated/type-graphql";
import { SubscriptionStatus } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";
import { createPrice } from "../create-price/createPrice";
import { createUser } from "../create-user/createUser";

export const createSubscription = async (prisma: PrismaClient, props?: Partial<SubscriptionCreateInput>) => {
  const defaultProps = {
    id: faker.datatype.uuid(),
    currentPeriodStart: faker.date.past(),
    currentPeriodEnd: faker.date.future(),
    cancelAtPeriodEnd: faker.datatype.boolean(),
    metadata: faker.random.objectElement(),
    status: SubscriptionStatus.ACTIVE,
    ...props,
  };

  if (!props?.price) {
    const price = await createPrice(prisma);
    defaultProps.price = { connect: { id: price.id } };
  }

  if (!props?.user) {
    const user = await createUser(prisma);
    defaultProps.user = { connect: { id: user.id } };
  }

  return prisma.subscription.create({ data: { ...(defaultProps as SubscriptionCreateInput), ...props } });
};
