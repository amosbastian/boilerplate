describe("pricing", () => {
  it("should show 3 different pricing tiers", () => {
    cy.visit("/pricing");
    cy.findAllByTestId("product-card").should("have.length", 3);
  });

  it("should redirect to /login when non-authenticated user clicks subscribe", () => {
    cy.visit("/pricing");
    cy.findByTestId("free-button").click();
    cy.url().should("include", "/login");
  });

  it("should redirect to /settings/billing when authenticated user clicks subscribe", () => {
    cy.login();
    cy.visit("/pricing");

    cy.findByTestId("premium-button").click();
    cy.url().should("include", "/settings/billing");
  });
});
