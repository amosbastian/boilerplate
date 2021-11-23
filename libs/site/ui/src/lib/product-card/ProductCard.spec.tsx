import { render } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProductCard plan={{ id: "id", name: "Name", metadata: {}, prices: [] }} />);
    expect(baseElement).toBeTruthy();
  });
});
