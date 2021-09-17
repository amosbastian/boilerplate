import { render } from "@testing-library/react";

import PlanSettingsForm from "./PlanSettingsForm";

describe("PlanSettingsForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PlanSettingsForm />);
    expect(baseElement).toBeTruthy();
  });
});
