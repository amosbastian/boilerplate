import { render } from "@testing-library/react";

import PageHeading from "./PageHeading";

describe("PageHeading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PageHeading />);
    expect(baseElement).toBeTruthy();
  });
});
