import { Container } from "@boilerplate/shared/ui";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { SignInForm, SignInFormProps } from "./SignInForm";

export default {
  component: SignInForm,
  title: "SignInForm",
} as Meta;

const Template: Story<SignInFormProps> = (args) => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex w="100%" h="100%" py={10} bg={bg}>
      <Container>
        <SignInForm {...args} />
      </Container>
    </Flex>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const WithProviders = Template.bind({});
WithProviders.args = {
  providers: [
    { id: "reddit", name: "Reddit", type: "oauth", signinUrl: "", callbackUrl: "" },
    { id: "twitter", name: "Twitter", type: "oauth", signinUrl: "", callbackUrl: "" },
  ],
};
