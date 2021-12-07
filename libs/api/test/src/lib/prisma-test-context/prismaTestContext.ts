import { PrismaClient, PrismaPromise } from "@prisma/client";

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
        const transactions: PrismaPromise<any>[] = [];
        transactions.push(prismaClient.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`);

        const tablenames = await prismaClient.$queryRaw<
          Array<{ TABLE_NAME: string }>
        >`SELECT TABLE_NAME from information_schema.TABLES WHERE TABLE_SCHEMA = 'boilerplate';`;

        for (const { TABLE_NAME: tablename } of tablenames) {
          if (tablename !== "_prisma_migrations") {
            try {
              transactions.push(prismaClient.$executeRawUnsafe(`TRUNCATE ${tablename};`));
            } catch (error) {
              console.log({ error });
            }
          }
        }

        transactions.push(prismaClient.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`);

        try {
          await prismaClient.$transaction(transactions);
        } catch (error) {
          console.log({ error });
        }

        // Release the Prisma Client connection
        await prismaClient.$disconnect();
      }
    },
  };
}
