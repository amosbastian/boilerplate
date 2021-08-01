describe("shared-ui: DropdownMenu component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=dropdownmenu--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to shared-ui!");
  });
});
