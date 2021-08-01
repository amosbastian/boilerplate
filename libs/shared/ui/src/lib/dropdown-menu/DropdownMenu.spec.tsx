import { MenuItem } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { DropdownMenu } from "./DropdownMenu";

describe("DropdownMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <DropdownMenu label="Dropdown menu">
        <MenuItem>Menu Item</MenuItem>
      </DropdownMenu>,
    );
    expect(baseElement).toBeTruthy();
  });
});
