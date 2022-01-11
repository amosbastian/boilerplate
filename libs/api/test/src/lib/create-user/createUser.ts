import { Prisma, PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const UserFactory = {
  build: (props?: Omit<Prisma.UserCreateArgs, "data"> & { data?: Partial<Prisma.UserCreateArgs["data"]> }) => {
    const defaultProps: Prisma.UserCreateArgs["data"] = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      image: faker.internet.avatar(),
      ...props?.data,
    };

    return defaultProps as Prisma.UserCreateArgs["data"];
  },

  create: async (
    prisma: PrismaClient,
    props?: Omit<Prisma.UserCreateArgs, "data"> & { data?: Partial<Prisma.UserCreateArgs["data"]> },
  ) => {
    const data = UserFactory.build(props);

    const user = await prisma.user.create({ ...props, data });

    return user;
  },
};
