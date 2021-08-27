import { Story, Meta } from "@storybook/react";
import { Image, ImageProps } from "./Image";

export default {
  component: Image,
  title: "Image",
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://images.unsplash.com/photo-1544873221-1b85d4624756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  h: "300px",
  w: "300px",
};
