import { render } from "@testing-library/react";

import FlowNodeInputDefault from "./FlowNodeInputDefault";

describe("FlowNodeInputDefault", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeInputDefault />);
    expect(baseElement).toBeTruthy();
  });
});
