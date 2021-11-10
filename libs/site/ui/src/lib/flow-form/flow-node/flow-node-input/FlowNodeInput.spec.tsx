import { render } from "@testing-library/react";

import FlowNodeInput from "./FlowNodeInput";

describe("FlowNodeInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeInput />);
    expect(baseElement).toBeTruthy();
  });
});
