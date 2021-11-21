import * as faker from "faker";

describe("settings", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should load the page", () => {
    cy.visit("/settings");

    cy.get("h1").should("contain", "Settings");
  });

  describe("general", () => {
    it("should be possible to change theme", () => {
      cy.visit("/settings");

      cy.findByTestId("account-settings-form").within(() => {
        cy.findByLabelText("Theme").select("dark");
        cy.findByLabelText("Theme").should("have.value", "dark");

        cy.findByLabelText("Theme").select("light");
        cy.findByLabelText("Theme").should("have.value", "light");
      });
    });

    it("should be possible to change language", () => {
      cy.visit("/settings");

      cy.findByTestId("account-settings-form").within(() => {
        cy.findByLabelText("Language").select("nl");
        cy.findByLabelText("Language").should("have.value", "nl");

        cy.findByLabelText("Language").select("en");
        cy.findByLabelText("Language").should("have.value", "en");
      });
    });

    it("should be possible to update a user's username", () => {
      cy.visit("/settings");

      cy.findByTestId("profile-settings-form").within(() => {
        const newUsername = faker.internet.userName();

        cy.get('input[name="name"]').clear().type(newUsername);
        cy.root().submit();
      });

      cy.get("#profile-update-success").should("be.visible");
    });
  });
});
