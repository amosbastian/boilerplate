import { render } from "@testing-library/react";

import Products from "./Products";

describe("Products", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Products />);
    expect(baseElement).toBeTruthy();
  });
});
