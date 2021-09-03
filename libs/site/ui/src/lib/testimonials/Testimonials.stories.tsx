import { Story, Meta } from "@storybook/react";
import { Testimonials, TestimonialsProps } from "./Testimonials";

export default {
  component: Testimonials,
  title: "Testimonials",
} as Meta;

const Template: Story<TestimonialsProps> = (args) => <Testimonials {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
