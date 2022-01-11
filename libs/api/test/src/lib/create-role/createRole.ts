import { Prisma, PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const RoleFactory = {
  build: (props?: Omit<Prisma.RoleCreateArgs, "data"> & { data?: Partial<Prisma.RoleCreateArgs["data"]> }) => {
    const defaultProps: Prisma.RoleCreateArgs["data"] = {
      name: faker.name.title(),
      ...props?.data,
    };

    return defaultProps;
  },

  create: async (
    prisma: PrismaClient,
    props?: Omit<Prisma.RoleCreateArgs, "data"> & { data?: Partial<Prisma.RoleCreateArgs["data"]> },
  ) => {
    const data = RoleFactory.build(props);

    const role = await prisma.role.create({ ...props, data });

    return role;
  },
};
