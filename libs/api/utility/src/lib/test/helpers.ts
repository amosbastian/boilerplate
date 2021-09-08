// import { join } from "path";
import { PrismaClient } from "@prisma/client";
// import { ApolloServer } from "apollo-server-express";
import { createTestClient, TestQuery, TestSetOptions } from "apollo-server-integration-testing";
import { execSync } from "child_process";
import { createApolloServer } from "../create-apollo-server/createApolloServer";
import { prisma } from "../prisma";

type TestContext = {
  client: {
    query: TestQuery;
    mutate: TestQuery;
    setOptions: TestSetOptions;
  };
  prisma: PrismaClient;
};

export function createTestContext(): TestContext {
  const ctx = {} as TestContext;
  const graphqlCtx = graphqlTestContext();
  const prismaCtx = prismaTestContext();

  beforeAll(async () => {
    await prismaCtx.beforeAll();
  });

  beforeEach(async () => {
    const client = await graphqlCtx.beforeEach();
    const prismaClient = await prismaCtx.beforeEach();

    Object.assign(ctx, {
      client,
      prisma: prismaClient,
    });
  });

  afterEach(async () => {
    await graphqlCtx.afterEach();
    await prismaCtx.afterEach();
  });

  return ctx;
}

function graphqlTestContext() {
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

function prismaTestContext() {
  // const prismaBinary = join(__dirname, "../../../..", "node_modules", ".bin", "prisma");
  let prismaClient: null | PrismaClient = null;

  return {
    async beforeAll() {
      // Run the migrations to ensure our schema has the required structure
      // execSync(`${prismaBinary} db push`);
      execSync("npx prisma db push");
    },

    async beforeEach() {
      // Construct a new Prisma Client connected to the generated schema
      prismaClient = new PrismaClient();
      return prismaClient;
    },

    async afterEach() {
      if (prismaClient) {
        // Drop the schema after the tests have completed
        const tableNames: [{ tablename: string }] =
          await prismaClient.$queryRaw`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

        for (const { tablename } of tableNames) {
          if (tablename !== "_prisma_migrations") {
            await prismaClient.$queryRaw`TRUNCATE TABLE "public"."${tablename}" CASCADE;`;
          }
        }

        // Release the Prisma Client connection
        await prismaClient.$disconnect();
      }
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mockFunction<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
  return fn as jest.MockedFunction<T>;
}
