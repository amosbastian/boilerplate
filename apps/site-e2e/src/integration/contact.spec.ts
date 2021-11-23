import * as faker from "faker";

describe("contact", () => {
  beforeEach(() => cy.visit("/contact"));

  it("requires an email, first name, last name, subject, message and acceptance of terms", () => {
    cy.findByTestId("contact-form").within(() => {
      cy.findByRole("button", { name: /Submit/i }).click();

      cy.get("input:invalid").should("have.length", 4);
      cy.get("textarea:invalid").should("have.length", 1);

      cy.get('[name="firstName"]').type(faker.name.firstName());
      cy.get("input:invalid").should("have.length", 3);
      cy.get("textarea:invalid").should("have.length", 1);

      cy.get('[name="lastName"]').type(faker.name.lastName());
      cy.get("input:invalid").should("have.length", 2);
      cy.get("textarea:invalid").should("have.length", 1);

      cy.get('[name="email"]').type(faker.internet.email());
      cy.get("input:invalid").should("have.length", 1);
      cy.get("textarea:invalid").should("have.length", 1);

      cy.get('[name="subject"]').type(faker.lorem.word());
      cy.get("input:invalid").should("have.length", 0);
      cy.get("textarea:invalid").should("have.length", 1);

      cy.get('[name="message"]').type(faker.lorem.paragraph());
      cy.get("textarea:invalid").should("have.length", 0);

      cy.findByRole("button", { name: /Submit/i }).click();
      cy.get('input[type="checkbox"]').should("have.focus").click({ force: true }).type("{enter}");

      // TODO: check email
    });
  });
});
