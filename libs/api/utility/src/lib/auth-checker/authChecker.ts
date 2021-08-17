import type { Context } from "@boilerplate/shared/types";
import { AuthChecker } from "type-graphql";

export const authChecker: AuthChecker<Context> = ({ context: { user } }, roles) => {
  if (roles.length === 0) {
    return Boolean(user);
  }

  if (!user) {
    return false;
  }

  const userRoles = (user.roles ?? []).map((role) => role.name.toUpperCase());
  const roleSet = new Set(roles.map((role) => role.toUpperCase()));

  if (user.roles && userRoles.some((role) => roleSet.has(role))) {
    return true;
  }

  return false;
};
