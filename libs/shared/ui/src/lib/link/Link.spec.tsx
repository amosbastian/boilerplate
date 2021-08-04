import { render } from "@testing-library/react";
import Link from "./Link";

describe("Link", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Link href="/" />);
    expect(baseElement).toBeTruthy();
  });
});
