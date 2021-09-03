import { Section } from "@boilerplate/shared/ui";
import { Meta, Story } from "@storybook/react";
import { TestimonialCard, TestimonialCardProps } from "./TestimonialCard";

export default {
  component: TestimonialCard,
  title: "TestimonialCard",
} as Meta;

const Template: Story<TestimonialCardProps> = (args) => (
  <Section>
    <TestimonialCard {...args} />
  </Section>
);

export const Primary = Template.bind({});
Primary.args = {
  testimonial: {
    content:
      "Maecenas venenatis diam vitae orci malesuada suscipit. Class aptent taciti sociosqu ad. 👌😻 #boilerplate",
    createdAt: "2021-03-12T20:03:10.303Z",
    imageUrl: "https://avatars.githubusercontent.com/u/9199433?s=400&u=dbfec4d54a80a5a991db4ae2a4ba80ee9ff9344c&v=4",
    name: "Amos Bastian",
    url: "https://github.com/amosbastian",
    username: "AmosBastian",
  },
};
