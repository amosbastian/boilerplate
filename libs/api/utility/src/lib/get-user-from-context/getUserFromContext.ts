import { Context } from "@boilerplate/shared/types";
import { logger } from "@boilerplate/shared/utility/logger";
import { oryApiClient } from "@boilerplate/shared/utility/ory";
import { User } from "@generated/type-graphql";

export const getUserFromContext = async ({ prisma, req }: Pick<Context, "prisma" | "req">): Promise<User | null> => {
  const cookie = req.cookies?.["ory_kratos_session"];

  if (!cookie) {
    return null;
  }

  try {
    const { data: session } = await oryApiClient.toSession(undefined, req.headers.cookie);

    if (!session) {
      return null;
    }

    if (!process.env.JWT_SECRET) return null;

    const user = await prisma.user.findUnique({ where: { id: session.identity.id }, include: { roles: true } });

    return user;
  } catch (error) {
    logger.error("getUserFromContext", { error });
    return null;
  }
};
