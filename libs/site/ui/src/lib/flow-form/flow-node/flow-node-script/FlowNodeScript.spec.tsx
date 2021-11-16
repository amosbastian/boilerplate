import { render } from "@testing-library/react";

import FlowNodeScript from "./FlowNodeScript";

describe("FlowNodeScript", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeScript />);
    expect(baseElement).toBeTruthy();
  });
});
