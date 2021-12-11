import * as faker from "faker";

describe("footer", () => {
  beforeEach(() => cy.visit("/"));

  it("should be possible to subscribe to the newsletter ", () => {
    cy.get("footer").within(() => {
      cy.get('input[type="email"]').first().type(faker.internet.email());

      cy.findAllByRole("button", { name: /Subscribe/i })
        .first()
        .click();

      // TODO: check if email is sent
    });
  });

  it("should be possible to change theme", () => {
    cy.get("footer").within(() => {
      cy.get('select[name="theme"]').select("dark");
      cy.get('select[name="theme"]').should("have.value", "dark");

      cy.get('select[name="theme"]').select("light");
      cy.get('select[name="theme"]').should("have.value", "light");
    });
  });

  it("should be possible to change language", () => {
    cy.get("footer").within(() => {
      cy.get('select[name="language"]').select("nl");
      cy.get('select[name="language"]').should("have.value", "nl");

      cy.get('select[name="language"]').select("en");
      cy.get('select[name="language"]').should("have.value", "en");
    });
  });
});
