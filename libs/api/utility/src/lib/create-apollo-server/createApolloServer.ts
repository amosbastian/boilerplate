import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import "dotenv/config";
import { createSchema } from "../create-schema/createSchema";
import { getUserFromContext } from "../get-user-from-context/getUserFromContext";

export const createApolloServer = async (
  prisma: PrismaClient,
  config?: ApolloServerExpressConfig,
): Promise<ApolloServer> => {
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      const user = await getUserFromContext({ req, prisma });
      return { req, res, prisma, user };
    },
    ...config,
  });

  return apolloServer;
};
