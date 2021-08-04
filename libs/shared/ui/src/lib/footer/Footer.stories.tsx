import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "./Footer";

export default {
  component: Footer,
  title: "Footer",
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
