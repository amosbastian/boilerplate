import { Story, Meta } from "@storybook/react";
import { Layout } from "./Layout";

export default {
  component: Layout,
  title: "Layout",
} as Meta;

const Template: Story<> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
