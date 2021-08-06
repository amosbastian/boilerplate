import { List, Menu } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { RiBook3Fill } from "react-icons/ri";
import { FlyoutMenuItem, FlyoutMenuItemProps } from "./FlyoutMenuItem";

export default {
  component: FlyoutMenuItem,
  title: "FlyoutMenuItem",
} as Meta;

const Template: Story<FlyoutMenuItemProps> = (args) => (
  <Menu isOpen>
    <List>
      <FlyoutMenuItem {...args} />
    </List>
  </Menu>
);

export const Primary = Template.bind({});
Primary.args = {
  description: "Description",
  heading: "Heading",
  href: "/",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  iconType: RiBook3Fill,
};
