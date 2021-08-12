import { render } from "@testing-library/react";

import PlanForm from "./PlanForm";

describe("PlanForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PlanForm />);
    expect(baseElement).toBeTruthy();
  });
});
