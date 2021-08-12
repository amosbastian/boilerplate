import { render } from "@testing-library/react";

import AccountSettingsForm from "./AccountSettingsForm";

describe("AccountSettingsForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AccountSettingsForm />);
    expect(baseElement).toBeTruthy();
  });
});
