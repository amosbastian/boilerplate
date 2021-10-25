import type { Role, RoleCreateInput } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import * as faker from "faker";

export const createRole = async (prisma: PrismaClient, props?: RoleCreateInput): Promise<Role> => {
  const defaultProps: RoleCreateInput = {
    name: faker.name.title(),
    ...props,
  };

  return prisma.role.create({ data: { ...defaultProps, ...props } });
};
