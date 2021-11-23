import { render } from "@testing-library/react";
import ProfileSettingsForm from "./ProfileSettingsForm";

describe("ProfileSettingsForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProfileSettingsForm />);
    expect(baseElement).toBeTruthy();
  });
});
