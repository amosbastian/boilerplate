import { render } from "@testing-library/react";

import CardContent from "./CardContent";

describe("CardContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardContent />);
    expect(baseElement).toBeTruthy();
  });
});
