// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { createTestContext, createUser } from "@boilerplate/api/test";
import type { Request } from "express";
import { encode } from "next-auth/jwt";
import "reflect-metadata";
import { getUserFromContext } from "./getUserFromContext";

const ctx = createTestContext();

describe("getUserFromContext", () => {
  it("should return null if no next-auth.session-token cookie", async () => {
    const mockRequest = {
      headers: {},
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user).toBeNull();
  });

  it("should return null if next-auth.session-token cookie is null", async () => {
    const mockRequest = {
      cookies: { "next-auth.session-token": "null" },
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user).toBeNull();
  });

  it("should return a user if next-auth.session-token cookie set correctly", async () => {
    const createdUser = await createUser(ctx.prisma);

    const encodedToken = await encode({
      token: { sub: createdUser.id },
      secret: process.env.JWT_SECRET as string,
      signingKey: process.env.JWT_SIGNING_KEY,
      encryptionKey: process.env.JWT_ENCRYPTION_KEY,
    });

    const mockRequest = {
      cookies: { "next-auth.session-token": encodedToken },
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user?.id).toEqual(createdUser.id);
  });
});
