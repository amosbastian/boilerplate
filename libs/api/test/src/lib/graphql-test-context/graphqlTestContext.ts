import { createApolloServer } from "@boilerplate/api/apollo";
import { prisma } from "@boilerplate/api/utility";
import { createTestClient } from "apollo-server-integration-testing";

export function graphqlTestContext() {
  // let apolloServer: ApolloServer | null = null;
  let apolloServer: any = null;

  return {
    async beforeEach() {
      apolloServer = await createApolloServer(prisma);
      await apolloServer.start();

      return createTestClient({
        apolloServer,
      });
    },

    async afterEach() {
      apolloServer?.stop();
      // Release ApolloServer's Prisma Client connection
      await prisma.$disconnect();
    },
  };
}
