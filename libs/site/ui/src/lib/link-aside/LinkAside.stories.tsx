import { Meta, Story } from "@storybook/react";
import { RiAccountCircleLine, RiBankCardLine } from "react-icons/ri";
import { LinkAside, LinkAsideProps } from "./LinkAside";

export default {
  component: LinkAside,
  title: "LinkAside",
} as Meta;

const Template: Story<LinkAsideProps> = (args) => <LinkAside {...args} />;

const links = [
  {
    href: "/",
    label: "profile",
    icon: RiAccountCircleLine,
  },
  {
    href: "/billing",
    label: "plan-and-billing",
    icon: RiBankCardLine,
  },
];

export const Active = Template.bind({});
Active.args = {
  links,
};
