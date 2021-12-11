import { Context } from "@boilerplate/shared/types";
import { oryApiClient } from "@boilerplate/shared/utility/ory";

export const getUserFromContext = async ({ prisma, req }: Pick<Context, "prisma" | "req">) => {
  try {
    const { data: session } = await oryApiClient.toSession(undefined, req.headers.cookie);

    if (!session) {
      return null;
    }

    const user = await prisma.user.findUnique({ where: { id: session.identity.id }, include: { roles: true } });

    return user;
  } catch (error) {
    return null;
  }
};
