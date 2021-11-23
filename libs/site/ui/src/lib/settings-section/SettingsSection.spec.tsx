import { render } from "@testing-library/react";
import SettingsSection from "./SettingsSection";

describe("SettingsSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SettingsSection />);
    expect(baseElement).toBeTruthy();
  });
});
