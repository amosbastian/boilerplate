import { MenuItem } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { RiGameFill, RiGameLine } from "react-icons/ri";
import FlyoutMenuItem from "../flyout-menu-item/FlyoutMenuItem";
import { DropdownMenu, DropdownMenuProps } from "./DropdownMenu";

export default {
  component: DropdownMenu,
  title: "DropdownMenu",
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => <DropdownMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "solid",
  label: "Click / hover me",
  children: (
    <>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </>
  ),
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  ...Primary.args,
  variant: "unstyled",
};

export const WithFlyoutMenuItem = Template.bind({});
WithFlyoutMenuItem.args = {
  ...Primary.args,
  children: (
    <>
      <FlyoutMenuItem description="Description" heading="Heading" href="/" iconType={RiGameFill} />
      <FlyoutMenuItem description="Description" heading="Heading" href="/" iconType={RiGameLine} />
    </>
  ),
};
