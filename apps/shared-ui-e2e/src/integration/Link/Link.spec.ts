describe("shared-ui: Link component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=link--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to shared-ui!");
  });
});
