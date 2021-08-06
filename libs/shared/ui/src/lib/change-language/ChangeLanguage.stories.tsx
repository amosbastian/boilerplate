import { Meta, Story } from "@storybook/react";
import { ChangeLanguage, ChangeLanguageProps } from "./ChangeLanguage";

export default {
  component: ChangeLanguage,
  title: "ChangeLanguage",
} as Meta;

const Template: Story<ChangeLanguageProps> = (args) => <ChangeLanguage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
