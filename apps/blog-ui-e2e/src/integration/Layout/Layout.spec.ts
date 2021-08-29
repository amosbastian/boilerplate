describe("blog-ui: Layout component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=layout--primary"));

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to Layout!");
  });
});
