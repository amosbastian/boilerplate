import { render } from "@testing-library/react";
import MenuButton from "./MenuButton";

describe("MenuButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MenuButton />);
    expect(baseElement).toBeTruthy();
  });
});
