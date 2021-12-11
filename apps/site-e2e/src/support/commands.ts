import "@testing-library/cypress/add-commands";
import * as dayjs from "dayjs";

const KRATOS_PUBLIC = (Cypress.env("ory_sdk_url") || "http://localhost:3000/api/.ory").replace().replace(/\/$/, "");

const mergeFields = (
  form: { nodes: { attributes: { name: string; value: any }; type: string }[] },
  fields: Record<string, any>,
) => {
  const result: Record<string, any> = {};

  form.nodes.forEach(({ attributes, type }) => {
    if (type === "input") {
      result[attributes.name] = attributes.value;
    }
  });

  return { ...result, ...fields };
};

type AuthenticationMethod = "password" | "webauthn" | "lookup_secret" | "totp";

Cypress.Commands.add(
  "getSession",
  ({
    expectAal = "aal1",
    expectMethods = [],
  }: { expectAal?: "aal1" | "aa;2"; expectMethods?: Array<AuthenticationMethod> } = {}) =>
    cy.request("GET", `${KRATOS_PUBLIC}/sessions/whoami`).then((response) => {
      expect(response.body.id).to.not.be.empty;
      expect(dayjs().isBefore(dayjs(response.body.expires_at))).to.be.true;

      // Add a grace second for MySQL since it does not support ms
      expect(dayjs().isAfter(dayjs(response.body.issued_at).subtract(1, "s"))).to.be.true;
      expect(dayjs().isAfter(dayjs(response.body.authenticated_at).subtract(1, "s"))).to.be.true;

      expect(response.body.identity).to.exist;
      expect(response.body.authenticator_assurance_level).to.equal(expectAal);

      if (expectMethods.length > 0) {
        const authenticationMethods: { method: AuthenticationMethod }[] = response.body.authentication_methods;

        expect(authenticationMethods).to.have.lengthOf(expectMethods.length);

        expectMethods.forEach((value) => {
          expect(authenticationMethods.find(({ method }) => method === value)).to.exist;
        });
      }

      return response.body;
    }),
);

Cypress.Commands.add("noSession", () =>
  cy
    .request({
      method: "GET",
      url: `${KRATOS_PUBLIC}/sessions/whoami`,
      failOnStatusCode: false,
    })
    .then((request) => {
      expect(request.status).to.eq(401);
      return request;
    }),
);

Cypress.Commands.add(
  "login",
  ({
    email = "testuser@boilerplate.com",
    password = "RdrK5QZ9xLGsAHg",
    expectSession = true,
  }: {
    email?: string;
    password?: string;
    expectSession?: boolean;
    cookieUrl?: string;
  } = {}) => {
    if (expectSession) {
      console.log("Signing in user: ", { email, password });
    } else {
      console.log("Attempting user sign in: ", { email, password });
    }

    // cy.visit("/");
    // // https://github.com/cypress-io/cypress/issues/408
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // cy.clearCookies({ domain: null });

    cy.session([email, password], () => {
      cy.request({
        url: "http://localhost:3000/api/.ory" + "/self-service/login/browser",
        followRedirect: false,
        failOnStatusCode: false,
        headers: {
          Accept: "application/json",
        },
      })
        .then(({ body, status, statusText }) => {
          console.log(body, statusText);
          expect(status).to.eq(200);
          const form = body.ui;

          return cy.request({
            method: form.method,
            body: mergeFields(form, {
              password_identifier: email,
              password,
              method: "password",
            }),
            headers: {
              Accept: "application/json",
            },
            url: form.action,
            followRedirect: false,
            failOnStatusCode: false,
          });
        })
        .then(({ status }) => {
          console.log("Login sequence completed: ", {
            email,
            password,
            expectSession,
          });
          if (expectSession) {
            expect(status).to.eq(200);
            return cy.getSession();
          } else {
            expect(status).to.not.eq(200);
            return cy.noSession();
          }
        });
    });
  },
);

Cypress.Commands.add(
  "loginApi",
  ({
    email = "testuser@boilerplate.com",
    password = "RdrK5QZ9xLGsAHg",
  }: {
    email?: string;
    password?: string;
  } = {}) =>
    cy
      .request({
        url: KRATOS_PUBLIC + "/self-service/login/api",
      })
      .then(({ body }) => {
        const form = body.ui;
        return cy.request({
          method: form.method,
          body: mergeFields(form, {
            password_identifier: email,
            password,
            method: "password",
          }),
          url: form.action,
        });
      })
      .then(({ body }) => {
        console.log(body);
        expect(body.session.identity.traits.email).to.contain(email);
      }),
);
