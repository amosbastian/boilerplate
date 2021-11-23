import { render } from "@testing-library/react";
import PlanSettingsForm from "./PlanSettingsForm";

describe("PlanSettingsForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PlanSettingsForm products={[]} user={{ id: "id" }} />);
    expect(baseElement).toBeTruthy();
  });
});
