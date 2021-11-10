import { render } from "@testing-library/react";

import FlowNodeAnchor from "./FlowNodeAnchor";

describe("FlowNodeAnchor", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowNodeAnchor />);
    expect(baseElement).toBeTruthy();
  });
});
