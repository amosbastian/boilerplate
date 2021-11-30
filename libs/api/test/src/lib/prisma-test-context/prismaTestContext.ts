import { PrismaClient } from "@prisma/client";

export function prismaTestContext() {
  let prismaClient: null | PrismaClient = null;

  return {
    async beforeEach() {
      // Construct a new Prisma Client connected to the generated schema
      prismaClient = new PrismaClient();
      return prismaClient;
    },

    async afterEach() {
      if (prismaClient) {
        const tables = await prismaClient.$queryRawUnsafe(`SELECT tablename FROM pg_tables WHERE schemaname='public';`);
        for (const { tablename } of tables as { tablename: string }[]) {
          if (tablename !== "_prisma_migrations") {
            try {
              await prismaClient.$queryRawUnsafe(`TRUNCATE TABLE "public"."${tablename}" CASCADE;`);
            } catch (error) {
              console.log({ error });
            }
          }
        }
        // Release the Prisma Client connection
        await prismaClient.$disconnect();
      }
    },
  };
}
