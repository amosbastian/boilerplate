import { render } from "@testing-library/react";
import SettingsSelect from "./SettingsSelect";

describe("SettingsSelect", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SettingsSelect links={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
