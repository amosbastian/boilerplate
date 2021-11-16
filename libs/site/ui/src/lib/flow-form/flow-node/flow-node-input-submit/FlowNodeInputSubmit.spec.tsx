import { render } from "@testing-library/react";

import FlowNodeInputSubmit from "./FlowNodeInputSubmit";

describe("FlowNodeInputSubmit", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeInputSubmit />);
    expect(baseElement).toBeTruthy();
  });
});
