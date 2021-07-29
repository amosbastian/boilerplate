import { Menu, MenuItem } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { MenuList, MenuListProps } from "./MenuList";

export default {
  component: MenuList,
  title: "MenuList",
} as Meta;

const Template: Story<MenuListProps> = (args) => (
  <Menu isOpen>
    <MenuList {...args} />
  </Menu>
);

export const Primary = Template.bind({});
Primary.args = {
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

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
