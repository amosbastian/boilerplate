import { Button } from "@chakra-ui/react";
import { Story, Meta } from "@storybook/react";
import { PageHeading, PageHeadingProps } from "./PageHeading";

export default {
  component: PageHeading,
  title: "PageHeading",
} as Meta;

const Template: Story<PageHeadingProps> = (args) => <PageHeading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: "Heading",
};

export const WithActions = Template.bind({});
WithActions.args = {
  ...Primary.args,
  actions: <Button>Button</Button>,
};
