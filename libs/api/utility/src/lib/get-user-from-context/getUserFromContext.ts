import { Context } from "@boilerplate/shared/types";
import { logger } from "@boilerplate/shared/utility/logger";
import { getOrySession } from "@boilerplate/shared/utility/ory";
import { User } from "@generated/type-graphql";

export const getUserFromContext = async ({ prisma, req }: Pick<Context, "prisma" | "req">): Promise<User | null> => {
  const cookie = req.cookies?.["ory_kratos_session"];

  if (!cookie) {
    return null;
  }

  const { error, session } = await getOrySession(req.headers.cookie);

  if (error) {
    throw new Error(error);
  }

  if (!session) {
    return null;
  }

  if (!process.env.JWT_SECRET) return null;

  try {
    const user = await prisma.user.findUnique({ where: { id: session.identity.id }, include: { roles: true } });

    return user;
  } catch (error) {
    logger.error("getUserFromContext", { error });
    return null;
  }
};
