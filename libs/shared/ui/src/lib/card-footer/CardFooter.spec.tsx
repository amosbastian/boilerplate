import { render } from "@testing-library/react";

import CardFooter from "./CardFooter";

describe("CardFooter", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardFooter />);
    expect(baseElement).toBeTruthy();
  });
});
