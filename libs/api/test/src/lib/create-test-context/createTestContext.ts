import type { PrismaClient } from "@prisma/client";
import { TestQuery, TestSetOptions } from "apollo-server-integration-testing";
import { graphqlTestContext } from "../graphql-test-context/graphqlTestContext";
import { prismaTestContext } from "../prisma-test-context/prismaTestContext";

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
    jest.clearAllMocks();
  });

  return ctx;
}
