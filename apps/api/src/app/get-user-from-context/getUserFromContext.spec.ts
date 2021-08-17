import type { Request } from "express";
import type { Secret } from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { createUser } from "../../test/factories";
import { createTestContext } from "../../test/helpers";
import { getUserFromContext } from "./getUserFromContext";

const ctx = createTestContext();

describe("getUserFromContext", () => {
  it("should return null if no authorization header", async () => {
    const mockRequest = {
      headers: {},
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user).toBeNull();
  });

  it("should return null if authorization token is null", async () => {
    const mockRequest = {
      headers: { authorization: "null" },
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user).toBeNull();
  });

  it("should return a user if authorization token set correctly", async () => {
    const createdUser = await createUser(ctx.prisma);

    const encodedToken = sign({ id: createdUser.id }, process.env.SECRET as Secret);

    const mockRequest = {
      headers: { authorization: `Bearer ${encodedToken}` },
    } as Request;

    const user = await getUserFromContext({ prisma: ctx.prisma, req: mockRequest });

    expect(user?.id).toEqual(createdUser.id);
  });
});
