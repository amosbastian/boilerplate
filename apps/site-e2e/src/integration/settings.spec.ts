import * as faker from "faker";
import { isMobile } from "../support/utils";

describe("settings", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should load the page", () => {
    cy.visit("/settings");

    cy.get("h1").should("contain", "Settings");
  });

  describe("general", () => {
    beforeEach(() => {
      cy.visit("/settings");
    });

    it("links to /settings/billing", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings/billing");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings/billing").should("have.attr", "href", "/settings/billing");
        });
      }
    });

    it("links to /settings/security", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings/security");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings/security").should("have.attr", "href", "/settings/security");
        });
      }
    });

    it("should be possible to change theme", () => {
      cy.findByTestId("account-settings-form").within(() => {
        cy.get('select[name="theme"]').select("dark");
        cy.get('select[name="theme"]').should("have.value", "dark");

        cy.get('select[name="theme"]').select("light");
        cy.get('select[name="theme"]').should("have.value", "light");
      });
    });

    it("should be possible to change language", () => {
      cy.findByTestId("account-settings-form").within(() => {
        cy.get('select[name="language"]').select("nl");
        cy.get('select[name="language"]').should("have.value", "nl");

        cy.get('select[name="language"]').select("en");
        cy.get('select[name="language"]').should("have.value", "en");
      });
    });

    it("should be possible to update a user's username", () => {
      cy.findByTestId("profile-settings-form").within(() => {
        const newUsername = faker.internet.userName();

        cy.get('input[name="name"]').clear().type(newUsername);
        cy.root().submit();
      });

      cy.get("#profile-update-success").should("be.visible");
    });
  });

  describe("billing", () => {
    beforeEach(() => {
      cy.visit("/settings/billing");
    });

    it("links to /settings", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings").should("have.attr", "href", "/settings");
        });
      }
    });

    it("links to /settings/security", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings/security");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings/security").should("have.attr", "href", "/settings/security");
        });
      }
    });

    it("should be possible to upgrade a user's plan", () => {
      // cy.findByText(/Upgrade/i).click();
    });

    it("should be possible to update a user's plan", () => {
      // cy.findByText(/Update/i).click();
    });

    it("should be possible to switch between yearly and monthly billing", () => {
      cy.findByTestId("billing-period").click({ force: true });
      cy.contains("/ year");

      cy.findByTestId("billing-period").click({ force: true });
      cy.contains("/ month");
    });
  });

  describe("security", () => {
    beforeEach(() => {
      cy.visit("/settings/security");
    });

    it("links to /settings", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings").should("have.attr", "href", "/settings");
        });
      }
    });

    it("links to /settings/billing", () => {
      if (isMobile()) {
        cy.findByTestId("settings-select")
          .children("option")
          .then((options) => {
            const values = [...options].map((option) => option.value);
            expect(values).to.contain("/settings/billing");
          });
      } else {
        cy.findByTestId("settings-aside").within(() => {
          cy.findByTestId("/settings/billing").should("have.attr", "href", "/settings/billing");
        });
      }
    });

    describe("email", () => {
      it("requires an email", () => {
        cy.findByTestId("ory-profile-settings").within(() => {
          cy.get('[name="traits.email"]').clear();
          cy.findByRole("button", { name: /Save/i }).click();

          cy.findAllByTestId("ory-4000002").should("have.length", 1);
        });
      });

      it("requires an email that isn't taken", () => {
        cy.findByTestId("ory-profile-settings").within(() => {
          cy.get('[name="traits.email"]').clear().type("amosbastian@gmail.com").type("{enter}");

          cy.findAllByTestId("ory-4000007").should("have.length", 1);
        });
      });

      it("should be possible to update a user's email", () => {
        cy.findByTestId("ory-profile-settings").within(() => {
          cy.get('[name="traits.email"]').clear().type("testuser@boilerplate.com").type("{enter}");

          cy.findAllByTestId("ory-1050001").should("have.length", 1);
        });
      });
    });

    describe("password", () => {
      it("requires a password", () => {
        cy.findByTestId("ory-password-settings").within(() => {
          cy.findByRole("button", { name: /Save/i }).click();

          cy.findAllByTestId("ory-4000002").should("have.length", 1);
        });
      });

      it("should be possible to update a user's password", () => {
        cy.findByTestId("ory-password-settings").within(() => {
          cy.get('[name="password"]').type("RdrK5QZ9xLGsAHg").type("{enter}");

          cy.findAllByTestId("ory-1050001").should("have.length", 1);
        });
      });
    });
  });
});
