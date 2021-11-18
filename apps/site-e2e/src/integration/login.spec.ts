import * as faker from "faker";

describe("login", () => {
  beforeEach(() => cy.visit("/login"));

  it("links to /registration", () => {
    cy.findByTestId("registration").should("have.attr", "href", "/registration");
  });

  it("links to /recovery", () => {
    cy.findByTestId("forgot-password").should("have.attr", "href", "/recovery");
  });

  it("requires an email", () => {
    cy.findByRole("button", { name: /Sign in/i }).click();

    cy.findAllByTestId("ory-4000002").should("have.length", 2);
  });

  it("requires a password", () => {
    cy.findByLabelText(/Email/i).type(faker.internet.email()).type("{enter}");

    cy.findAllByTestId("ory-4000002").should("have.length", 1);
  });

  it("requires a valid email and password", () => {
    cy.findByLabelText(/Email/i).type(faker.internet.email());
    cy.get('input[type="password"]').type(faker.internet.password());
    cy.findByRole("button", { name: /Sign in/i }).click();

    cy.findByTestId("ory-4000006").should("be.visible");
  });

  it("should navigate to /home on successful login", () => {
    cy.findByLabelText(/Email/i).type("kristina.bilkova@gmail.com");
    cy.get('input[type="password"]').type("fjfFK!C4U7cWF5c");
    cy.findByRole("button", { name: /Sign in/i }).click();

    cy.url().should("include", "/home");
  });
});
