import { Meta, Story } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  component: Link,
  title: "Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "/",
  children: "Link",
};
