import { render } from "@testing-library/react";

import SettingsAside from "./SettingsAside";

describe("SettingsAside", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SettingsAside />);
    expect(baseElement).toBeTruthy();
  });
});
