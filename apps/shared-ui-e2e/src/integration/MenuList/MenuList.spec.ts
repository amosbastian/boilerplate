describe("shared-ui: MenuList component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=menulist--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to shared-ui!");
  });
});
