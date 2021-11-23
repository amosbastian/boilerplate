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
});
