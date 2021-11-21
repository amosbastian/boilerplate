describe("home", () => {
  it("shows a welcome message", () => {
    cy.login();

    cy.visit("/home");

    cy.get("h1").should("contain", "Home");
  });
});
