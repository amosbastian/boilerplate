import { isMobile } from "../../support/utils";

describe("header", () => {
  beforeEach(() => cy.visit("/"));

  it("should link to /login for non-authenticated users", () => {
    cy.get("nav").within(() => {
      if (isMobile()) {
        cy.findByTestId("menu-button").click();
        cy.findByTestId("menu-button-content")
          .should("be.visible")
          .within(() => {
            cy.findByTestId("login").should("have.attr", "href", "/login");
          });
      } else {
        cy.findByTestId("login").should("have.attr", "href", "/login");
      }
    });
  });

  describe("authenticated", () => {
    beforeEach(() => {
      cy.login();
      cy.visit("/home");
    });

    it("should link to /settings ", () => {
      cy.get("nav").within(() => {
        cy.findByTestId("avatar-menu-button").click();
        cy.findByTestId("avatar-menu")
          .should("be.visible")
          .within(() => {
            cy.findByTestId("settings").should("have.attr", "href", "/settings");
          });
      });
    });

    it("should let the user sign out", () => {
      cy.get("nav").within(() => {
        cy.findByTestId("avatar-menu-button").click();
        cy.findByTestId("avatar-menu")
          .should("be.visible")
          .within(() => {
            cy.findByTestId("sign-out").click();
            cy.url().should("include", "/login");
          });
      });
    });
  });
});
