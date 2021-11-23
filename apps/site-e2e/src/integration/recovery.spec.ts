import * as faker from "faker";

describe("recovery", () => {
  beforeEach(() => cy.visit("/recovery"));

  it("requires an email", () => {
    cy.findByRole("button", { name: /Submit/i }).click();

    cy.findByTestId("ory-4000002").should("be.visible");
  });

  it("requires a valid email", () => {
    cy.get('[name="email"]').type(faker.random.word());
    cy.findByRole("button", { name: /Submit/i }).click();

    cy.findByTestId("ory-4000001").should("be.visible");
  });

  it("should show an alert of successful recovery request", () => {
    cy.get('[name="email"]').type(faker.internet.email()).type("{enter}");

    cy.findByTestId("ory-1060002").should("be.visible");
  });

  it("links to /login", () => {
    cy.findByTestId("login").should("have.attr", "href", "/login");
  });
});
