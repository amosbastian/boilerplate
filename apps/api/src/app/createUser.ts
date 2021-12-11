import { prisma } from "@boilerplate/api/utility";
import { logger } from "@boilerplate/shared/utility/logger";
import { oryApiClient } from "@boilerplate/shared/utility/ory";
import { SuccessfulSelfServiceRegistrationWithoutBrowser } from "@ory/kratos-client";
import type { Express } from "express";

export function addCreateUser(app: Express) {
  app.post("/api/create-user", async (request, response) => {
    try {
      const { data: session } = await oryApiClient.toSession(undefined, request.headers.cookie);

      if (!session.id) {
        return response.status(500).json({ error: { statusCode: 500, message: "Invalid session" } });
      }

      const { identity } = request.body as SuccessfulSelfServiceRegistrationWithoutBrowser;

      const userInput = {
        id: identity.id,
        email: identity.traits.email,
      };

      await prisma.user.upsert({
        where: { id: identity.id },
        create: userInput,
        update: userInput,
      });

      return response.status(200).json({ sessionId: identity.id });
    } catch (error: any) {
      logger.error("Create user", { error });
      response.status(500).json({ error: { statusCode: 500, message: error.message } });
    }
  });
}
