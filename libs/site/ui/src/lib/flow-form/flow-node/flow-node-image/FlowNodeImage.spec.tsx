import { render } from "@testing-library/react";

import FlowNodeImage from "./FlowNodeImage";

describe("FlowNodeImage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeImage />);
    expect(baseElement).toBeTruthy();
  });
});
