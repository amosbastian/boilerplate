import { render } from "@testing-library/react";

import FaqSection from "./FaqSection";

describe("FaqSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FaqSection />);
    expect(baseElement).toBeTruthy();
  });
});
