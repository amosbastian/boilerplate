import { render } from "@testing-library/react";

import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContactForm />);
    expect(baseElement).toBeTruthy();
  });
});
