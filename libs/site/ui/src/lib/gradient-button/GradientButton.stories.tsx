import { Story, Meta } from "@storybook/react";
import { GradientButton, GradientButtonProps } from "./GradientButton";

export default {
  component: GradientButton,
  title: "GradientButton",
} as Meta;

const Template: Story<GradientButtonProps> = (args) => <GradientButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
