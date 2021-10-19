import { render } from "@testing-library/react";

import NewsletterSubscriptionInput from "./NewsletterSubscriptionInput";

describe("NewsletterSubscriptionInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NewsletterSubscriptionInput />);
    expect(baseElement).toBeTruthy();
  });
});
