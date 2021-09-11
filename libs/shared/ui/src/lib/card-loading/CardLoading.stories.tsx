import { Meta, Story } from "@storybook/react";
import { CardLoading } from "./CardLoading";

export default {
  component: CardLoading,
  title: "CardLoading",
} as Meta;

const Template: Story = (args) => <CardLoading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
