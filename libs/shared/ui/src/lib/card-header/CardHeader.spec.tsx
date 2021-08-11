import { render } from "@testing-library/react";

import CardHeader from "./CardHeader";

describe("CardHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardHeader />);
    expect(baseElement).toBeTruthy();
  });
});
