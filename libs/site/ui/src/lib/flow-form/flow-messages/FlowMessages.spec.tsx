import { render } from "@testing-library/react";

import FlowMessages from "./FlowMessages";

describe("FlowMessages", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowMessages />);
    expect(baseElement).toBeTruthy();
  });
});
