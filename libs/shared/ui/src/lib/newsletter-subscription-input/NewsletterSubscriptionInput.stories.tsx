import { Meta, Story } from "@storybook/react";
import { Container } from "../container/Container";
import { NewsletterSubscriptionInput, NewsletterSubscriptionInputProps } from "./NewsletterSubscriptionInput";

export default {
  component: NewsletterSubscriptionInput,
  title: "NewsletterSubscriptionInput",
} as Meta;

const Template: Story<NewsletterSubscriptionInputProps> = (args) => (
  <Container py={10}>
    <NewsletterSubscriptionInput {...args} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {};
