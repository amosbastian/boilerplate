import "reflect-metadata";
import { createTestContext, createUser } from "@boilerplate/api/test";
import { oryApiClient } from "@boilerplate/shared/utility/ory";
import type { Request } from "express";
import { getUserFromContext } from "./getUserFromContext";

jest.mock("@boilerplate/shared/utility/ory");

const ctx = createTestContext();

describe("getUserFromContext", () => {
  it("should return null if no ory kratos cookie", async () => {
    const mockRequest = {
      headers: {},
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user).toBeNull();
  });

  it("should return a user if ory kratos cookie set correctly", async () => {
    const createdUser = await createUser(ctx.prisma);

    const mockRequest = {
      cookies: { ory_kratos_session: "ory_kratos_session" },
      headers: { cookie: "ory_kratos_session=ory_kratos_session" },
    } as Request;

    oryApiClient.toSession = jest.fn();

    (oryApiClient as jest.Mocked<typeof oryApiClient>).toSession.mockResolvedValue({
      data: { identity: { id: createdUser.id } },
    } as any);

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user?.id).toEqual(createdUser.id);
  });
});
