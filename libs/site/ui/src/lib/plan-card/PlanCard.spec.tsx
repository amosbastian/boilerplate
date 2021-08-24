import { render } from "@testing-library/react";

import PlanCard from "./PlanCard";

describe("PlanCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PlanCard />);
    expect(baseElement).toBeTruthy();
  });
});
