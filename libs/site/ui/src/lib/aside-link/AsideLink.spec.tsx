import { render } from "@testing-library/react";
import AsideLink from "./AsideLink";
import { RiArrowRightFill } from "react-icons/ri";

describe("AsideLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AsideLink label="Label" href="/" icon={RiArrowRightFill} />);
    expect(baseElement).toBeTruthy();
  });
});
