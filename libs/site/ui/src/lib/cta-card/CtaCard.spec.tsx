import { render } from "@testing-library/react";
import CtaCard from "./CtaCard";

describe("CtaCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CtaCard heading="Heading" subtitle="Subtitle" />);
    expect(baseElement).toBeTruthy();
  });
});
