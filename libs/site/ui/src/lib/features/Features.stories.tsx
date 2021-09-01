import { Story, Meta } from "@storybook/react";
import { Features, FeaturesProps } from "./Features";

export default {
  component: Features,
  title: "Features",
} as Meta;

const Template: Story<FeaturesProps> = (args) => <Features {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
