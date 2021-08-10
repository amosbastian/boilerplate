import { render } from "@testing-library/react";

import AvatarMenu from "./AvatarMenu";

describe("AvatarMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AvatarMenu />);
    expect(baseElement).toBeTruthy();
  });
});
