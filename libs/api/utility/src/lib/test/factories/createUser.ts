import type { User, UserCreateInput } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const createUser = async (prisma: PrismaClient, props?: UserCreateInput): Promise<User> => {
  const defaultProps: UserCreateInput = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    image: faker.internet.avatar(),
    ...props,
  };

  return prisma.user.create({ data: { ...defaultProps, ...props }, include: { roles: true } });
};