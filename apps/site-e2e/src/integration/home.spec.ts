describe("home", () => {
  it("should load the page", () => {
    cy.login();

    cy.visit("/home");

    cy.get("h1").should("contain", "Home");
  });
});
