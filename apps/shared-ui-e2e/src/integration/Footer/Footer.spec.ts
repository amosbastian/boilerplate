describe("shared-ui: Footer component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=footer--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to shared-ui!");
  });
});
