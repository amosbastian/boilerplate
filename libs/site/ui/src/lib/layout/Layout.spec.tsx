import { Box } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Layout>
        <Box />
      </Layout>,
    );
    expect(baseElement).toBeTruthy();
  });
});
