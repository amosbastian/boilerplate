import { Meta, Story } from "@storybook/react";
import { ChangeTheme, ChangeThemeProps } from "./ChangeTheme";

export default {
  component: ChangeTheme,
  title: "ChangeTheme",
} as Meta;

const Template: Story<ChangeThemeProps> = (args) => <ChangeTheme {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
