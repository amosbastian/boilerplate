import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "./Card";

export default {
  component: Card,
  title: "Card",
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "A card", p: 6 };
