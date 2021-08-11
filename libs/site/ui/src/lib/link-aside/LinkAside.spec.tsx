import { render } from "@testing-library/react";

import LinkAside from "./LinkAside";

describe("LinkAside", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LinkAside />);
    expect(baseElement).toBeTruthy();
  });
});
