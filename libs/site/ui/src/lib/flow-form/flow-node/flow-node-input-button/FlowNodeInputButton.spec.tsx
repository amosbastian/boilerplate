import { render } from "@testing-library/react";

import FlowNodeInputButton from "./FlowNodeInputButton";

describe("FlowNodeInputButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeInputButton />);
    expect(baseElement).toBeTruthy();
  });
});
