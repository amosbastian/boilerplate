import { render } from "@testing-library/react";

import ProfileSettings from "./ProfileSettings";

describe("ProfileSettings", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProfileSettings />);
    expect(baseElement).toBeTruthy();
  });
});
