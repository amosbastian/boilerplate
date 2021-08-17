import { Context } from "@boilerplate/shared/types";
import { User } from "@generated/type-graphql";
import { verify } from "jsonwebtoken";

export const getUserFromContext = async ({ prisma, req }: Pick<Context, "prisma" | "req">): Promise<User | null> => {
  const authorizationHeader = req.headers.Authorization || req.headers.authorization;

  if (!authorizationHeader) {
    return null;
  }

  const token = (authorizationHeader as string).replace(/bearer/i, "").trim();

  if (!token || token === "null") {
    return null;
  }

  if (!process.env.SECRET) return null;

  const decodedToken: { id: string } = verify(token, process.env.SECRET) as { id: string };

  const user = await prisma.user.findUnique({ where: { id: decodedToken.id }, include: { roles: true } });

  return user;
};
