import { createApolloServer } from "@boilerplate/api/apollo";
import { prisma } from "@boilerplate/api/utility";
import { configuration } from "@boilerplate/shared/configuration";
import { logger } from "@boilerplate/shared/utility/logger";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import { addCreateUser } from "./app/createUser";
import { addCreateCheckoutSession, addCreatePortalLink, addStripeWebhook } from "./app/stripe";

const main = async () => {
  const apolloServer = await createApolloServer(prisma);
  await apolloServer.start();

  const app = express();

  Sentry.init({
    dsn: "https://91f1ccd1e77948ca928dd670341c9980@o697629.ingest.sentry.io/5989433",
    integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express({ app })],
    tracesSampleRate: 1.0,
  });

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(cookieParser());

  app.use((req, res, next) => {
    if (req.originalUrl === "/api/stripe/webhook") {
      next();
    } else {
      express.json()(req, res, next);
    }
  });

  const corsOptions = { credentials: true, origin: true };

  addStripeWebhook(app);
  app.use(cors(corsOptions));
  addCreateUser(app);
  addCreateCheckoutSession(app);
  addCreatePortalLink(app);

  app.use(Sentry.Handlers.errorHandler());

  apolloServer.applyMiddleware({
    app,
    cors: corsOptions,
  });

  const port = process.env.PORT || 3333;

  const url = `${configuration.BASE_URL_API}/graphql`;

  const server = app.listen(port, () => {
    logger.info(`Listening at ${url}`);
  });

  server.on("error", logger.error);
};

main();
