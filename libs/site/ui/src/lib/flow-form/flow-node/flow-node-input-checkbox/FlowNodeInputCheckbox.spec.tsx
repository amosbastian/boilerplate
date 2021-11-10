import { render } from "@testing-library/react";

import FlowNodeInputCheckbox from "./FlowNodeInputCheckbox";

describe("FlowNodeInputCheckbox", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeInputCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
