import { render } from "@testing-library/react";

import ArticleCard from "./ArticleCard";

describe("ArticleCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ArticleCard />);
    expect(baseElement).toBeTruthy();
  });
});
