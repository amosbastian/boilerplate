import { Story, Meta } from "@storybook/react";
import { AvatarMenu, AvatarMenuProps } from "./AvatarMenu";

export default {
  component: AvatarMenu,
  title: "AvatarMenu",
} as Meta;

const Template: Story<AvatarMenuProps> = (args) => <AvatarMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
