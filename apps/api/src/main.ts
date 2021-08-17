import * as express from "express";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { createApolloServer, prisma } from "@boilerplate/api/utility";

const main = async () => {
  const apolloServer = await createApolloServer(prisma);
  await apolloServer.start();

  const app = express();

  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 3333;

  const url =
    process.env.NODE_ENV || "development" === "development"
      ? `http://localhost:${port}/graphql`
      : `https://${process.env.DOMAIN_NAME}/graphql`;

  const server = app.listen(port, () => {
    console.log(`Listening at ${url}`);
  });

  server.on("error", console.error);
};

main();
