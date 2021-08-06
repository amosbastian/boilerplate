import { render } from "@testing-library/react";
import ChangeLanguage from "./ChangeLanguage";

describe("ChangeLanguage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ChangeLanguage />);
    expect(baseElement).toBeTruthy();
  });
});
