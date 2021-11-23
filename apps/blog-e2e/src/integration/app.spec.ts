import * as faker from "faker";

describe("blog", () => {
  beforeEach(() => cy.visit("/blog"));

  it("should display blog heading", () => {
    cy.get("h1").should("contain", "Blog");
  });

  it("should be possible to subscribe to the newsletter", () => {
    cy.get("main").within(() => {
      cy.get('input[type="email"]').first().type(faker.internet.email());

      cy.findAllByRole("button", { name: /Subscribe/i })
        .first()
        .click();

      // TODO: check if email is sent
    });
  });

  it("should show blog posts ", () => {
    cy.get("article").should("have.length.greaterThan", 1);
  });
});
