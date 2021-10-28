import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import * as Sentry from "@sentry/node";
import {
  ApolloError,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import "dotenv/config";
import { createSchema } from "../create-schema/createSchema";
import { getUserFromContext } from "@boilerplate/api/utility";

const reportErrorToSentry: ApolloServerPlugin = {
  async requestDidStart() {
    return {
      async didEncounterErrors(requestContext) {
        if (!requestContext.operation) {
          return;
        }

        for (const error of requestContext.errors) {
          // Only report internal server errors
          if (error instanceof ApolloError) {
            continue;
          }

          Sentry.withScope((scope) => {
            if (requestContext.context.user) {
              scope.setUser({ email: requestContext.context.user.email });
            }

            // Retrieve the transaction ID from our request headers
            const transactionId = requestContext.request?.http?.headers.get("x-transaction-id");

            if (transactionId) {
              scope.setTransactionName(transactionId);
            }

            // Annotate whether failing operation was query / mutation /subscription
            scope.setTag("kind", requestContext.operation?.operation);
            // Log query and variables as extras (make sure to strip out sensitive data!)
            scope.setExtra("query", requestContext.request.query);
            scope.setExtra("variables", requestContext.request.variables);

            if (error.path) {
              scope.addBreadcrumb({
                category: "query-path",
                message: error.path.join(" > "),
                level: Sentry.Severity.Debug,
              });
            }

            if (!error.message.includes("Access denied")) {
              Sentry.captureException(error);
            }
          });
        }
      },
    };
  },
};

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
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
      reportErrorToSentry,
    ],
    ...config,
  });

  return apolloServer;
};
