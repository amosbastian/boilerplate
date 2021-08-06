import { render } from "@testing-library/react";
import ChangeTheme from "./ChangeTheme";

describe("ChangeTheme", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ChangeTheme />);
    expect(baseElement).toBeTruthy();
  });
});
