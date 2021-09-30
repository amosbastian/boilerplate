import { render } from "@testing-library/react";

import PlanSettings from "./PlanSettings";

describe("PlanSettings", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PlanSettings />);
    expect(baseElement).toBeTruthy();
  });
});
