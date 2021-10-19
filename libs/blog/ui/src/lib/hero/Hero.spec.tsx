import { render } from "@testing-library/react";

import Hero from "./Hero";

describe("Hero", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Hero />);
    expect(baseElement).toBeTruthy();
  });
});
