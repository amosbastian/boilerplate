import { render } from "@testing-library/react";

import FileUpload from "./FileUpload";

describe("FileUpload", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FileUpload />);
    expect(baseElement).toBeTruthy();
  });
});
