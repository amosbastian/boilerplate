import { render } from "@testing-library/react";

import FlowNode from "./FlowNode";

describe("FlowNode", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNode />);
    expect(baseElement).toBeTruthy();
  });
});
