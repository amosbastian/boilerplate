// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    /**
     * Log a user in
     *
     * @param options
     */
    login(options?: {
      email?: string;
      password?: string;
      expectSession?: boolean;
      cookieUrl?: string;
    }): Chainable<Response<any | undefined>>;

    /**
     * Sign a usepr in via the API and return the session.
     *
     * @param options
     */
    loginApi(options?: { email: string; password: string }): Chainable<{ session: any }>;

    /**
     * Fetch the browser's Ory Session.
     *
     * @param options
     */
    getSession(options?: {
      expectAal?: "aal2" | "aal1";
      expectMethods?: Array<"password" | "webauthn" | "lookup_secret" | "totp">;
    }): Chainable<any>;

    /**
     * Expect that the browser has no valid Ory Kratos Cookie Session.
     */
    noSession(): Chainable<Response<any>>;
  }
}
