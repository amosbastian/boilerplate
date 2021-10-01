import { render } from "@testing-library/react";

import UserWelcome from "./UserWelcome";

describe("UserWelcome", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UserWelcome />);
    expect(baseElement).toBeTruthy();
  });
});
