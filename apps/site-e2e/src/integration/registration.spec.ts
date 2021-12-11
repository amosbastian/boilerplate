import * as faker from "faker";

describe("registration", () => {
  beforeEach(() => cy.visit("/registration"));

  it("links to /login", () => {
    cy.findByTestId("login").should("have.attr", "href", "/login");
  });

  it("requires an email", () => {
    cy.findByRole("button", { name: /Sign up/i }).click();

    cy.findAllByTestId("ory-4000002").should("have.length", 2);
  });

  it("requires an email that isn't already in use", () => {
    cy.get('[name="traits.email"]').type("testuser@boilerplate.com");
    cy.get('[name="password"]').type(faker.internet.password()).type("{enter}");

    cy.findByTestId("ory-4000007").should("be.visible");
  });

  it("requires a password", () => {
    cy.get('[name="traits.email"]').type(faker.internet.email()).type("{enter}");

    cy.findAllByTestId("ory-4000002").should("have.length", 1);
  });

  it("requires a password with a length greater than 6", () => {
    cy.get('[name="traits.email"]').type(faker.internet.email());
    cy.get('[name="password"]').type("123{enter}");

    cy.findAllByTestId("ory-4000005").should("have.length", 1);
  });

  it("requires a password not found in a data breach", () => {
    cy.get('[name="traits.email"]').type(faker.internet.email());
    cy.get('[name="password"]').type("123456789{enter}");

    cy.findAllByTestId("ory-4000005").should("have.length", 1);
  });

  it("should navigate to /home on successful registration", () => {
    cy.get('[name="traits.email"]').type(faker.internet.email());
    cy.get('[name="password"]').type(faker.internet.password()).type("{enter}");

    cy.url().should("include", "/home");
  });
});
