import { Section } from "@boilerplate/shared/ui";
import { Meta, Story } from "@storybook/react";
import { GradientButton, GradientButtonProps } from "./GradientButton";

export default {
  component: GradientButton,
  title: "GradientButton",
} as Meta;

const Template: Story<GradientButtonProps> = (args) => (
  <Section>
    <GradientButton {...args} />
  </Section>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
