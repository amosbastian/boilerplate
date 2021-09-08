import { createApolloServer, prisma } from "@boilerplate/api/utility";
import * as cookieParser from "cookie-parser";
import * as express from "express";

const main = async () => {
  const apolloServer = await createApolloServer(prisma);
  await apolloServer.start();

  const app = express();
  app.use(cookieParser());

  apolloServer.applyMiddleware({ app, cors: { credentials: true, origin: "http://localhost:3000" } });

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
