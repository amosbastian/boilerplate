import { Context } from "@boilerplate/shared/types";
import { logger } from "@boilerplate/shared/utility/logger";
import { User } from "@generated/type-graphql";
import { decode } from "next-auth/jwt";

export const getUserFromContext = async ({ prisma, req }: Pick<Context, "prisma" | "req">): Promise<User | null> => {
  const token = req.cookies?.["next-auth.session-token"];

  if (!token || token === "null") {
    return null;
  }

  if (!process.env.JWT_SECRET) return null;

  try {
    const decodedToken = await decode({
      token,
      secret: process.env.JWT_SECRET,
      signingKey: process.env.JWT_SIGNING_KEY,
      encryptionKey: process.env.JWT_ENCRYPTION_KEY,
    });

    const user = await prisma.user.findUnique({ where: { id: decodedToken.sub }, include: { roles: true } });

    return user;
  } catch (error) {
    logger.error("getUserFromContext", { error });
    return null;
  }
};
