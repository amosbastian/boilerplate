import { render } from "@testing-library/react";

import AsideLink from "./AsideLink";

describe("AsideLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AsideLink />);
    expect(baseElement).toBeTruthy();
  });
});
