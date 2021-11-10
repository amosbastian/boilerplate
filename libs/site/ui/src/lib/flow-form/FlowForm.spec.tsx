import { render } from "@testing-library/react";

import FlowForm from "./FlowForm";

describe("FlowForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlowForm />);
    expect(baseElement).toBeTruthy();
  });
});
