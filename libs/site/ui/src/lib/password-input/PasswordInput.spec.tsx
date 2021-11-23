import { render } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PasswordInput />);
    expect(baseElement).toBeTruthy();
  });
});
