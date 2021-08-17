import { authChecker } from "./authChecker";

describe("authChecker", () => {
  it("should return true if no roles given and a user in context", async () => {
    expect(authChecker({ context: { user: {} } } as never, [])).toBe(true);
  });

  it("should return false if no roles given and no user in context", async () => {
    expect(authChecker({ context: { user: null } } as never, [])).toBe(false);
  });

  it("should return false if roles given and no user in context", async () => {
    expect(authChecker({ context: { user: null } } as never, ["admin"])).toBe(false);
  });

  it("should return false if roles given and user's roles do not match", async () => {
    expect(authChecker({ context: { user: { roles: [{ name: "public" }] } } } as never, ["admin"])).toBe(false);
    expect(authChecker({ context: { user: {} } } as never, ["admin"])).toBe(false);
  });

  it("should return true if roles given and user's roles match", async () => {
    expect(authChecker({ context: { user: { roles: [{ name: "admin" }] } } } as never, ["admin"])).toBe(true);
  });
});
