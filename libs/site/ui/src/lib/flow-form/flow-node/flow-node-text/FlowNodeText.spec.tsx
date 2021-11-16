import { render } from "@testing-library/react";

import FlowNodeText from "./FlowNodeText";

describe("FlowNodeText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeText />);
    expect(baseElement).toBeTruthy();
  });
});
