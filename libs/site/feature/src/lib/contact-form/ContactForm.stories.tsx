import { Section } from "@boilerplate/shared/ui";
import { Meta, Story } from "@storybook/react";
import { ContactForm, ContactFormProps } from "./ContactForm";

export default {
  component: ContactForm,
  title: "ContactForm",
} as Meta;

const Template: Story<ContactFormProps> = (args) => (
  <Section h="100vh" containerProps={{ maxW: "container.sm" }}>
    <ContactForm {...args} />
  </Section>
);

export const Primary = Template.bind({});
Primary.args = {};
