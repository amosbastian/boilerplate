import { render } from "@testing-library/react";
import FlyoutMenuItem from "./FlyoutMenuItem";

describe("FlyoutMenuItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FlyoutMenuItem description="Description" heading="Heading" href="/" />);
    expect(baseElement).toBeTruthy();
  });
});
