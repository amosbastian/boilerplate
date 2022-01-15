import { createApolloServer } from "@boilerplate/api/apollo";
import { prisma } from "@boilerplate/api/utility";
import type { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-integration-testing";

// We want to mock it because of getUserFromContext
jest.mock("@boilerplate/shared/utility/ory");

export function graphqlTestContext() {
  // let apolloServer: ApolloServer | null = null;
  let apolloServer: ApolloServer;

  return {
    async beforeEach() {
      apolloServer = await createApolloServer(prisma);
      await apolloServer.start();

      return createTestClient({
        apolloServer: apolloServer as any,
      });
    },

    async afterEach() {
      apolloServer?.stop();
      // Release ApolloServer's Prisma Client connection
      await prisma.$disconnect();
    },
  };
}
