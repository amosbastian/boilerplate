import { Meta, Story } from "@storybook/react";
import { RiAccountCircleLine, RiBankCardLine } from "react-icons/ri";
import { AsideLink, AsideLinkProps } from "./AsideLink";

export default {
  component: AsideLink,
  title: "AsideLink",
} as Meta;

const Template: Story<AsideLinkProps> = (args) => <AsideLink {...args} />;

export const Active = Template.bind({});
Active.args = {
  href: "/",
  label: "Profile",
  icon: RiAccountCircleLine,
};

export const Inactive = Template.bind({});
Inactive.args = {
  href: "/billing",
  label: "Plan & Billing",
  icon: RiBankCardLine,
};
