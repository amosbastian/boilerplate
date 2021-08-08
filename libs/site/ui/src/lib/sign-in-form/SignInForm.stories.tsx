import { Meta, Story } from "@storybook/react";
import { SignInForm, SignInFormProps } from "./SignInForm";

export default {
  component: SignInForm,
  title: "SignInForm",
} as Meta;

const Template: Story<SignInFormProps> = (args) => <SignInForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithProviders = Template.bind({});
WithProviders.args = {
  providers: [
    { id: "reddit", name: "Reddit", type: "oauth", signinUrl: "", callbackUrl: "" },
    { id: "twitter", name: "Twitter", type: "oauth", signinUrl: "", callbackUrl: "" },
  ],
};
