import { Story, Meta } from "@storybook/react";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import { RiStarFill } from "react-icons/ri";
import { Container } from "@boilerplate/shared/ui";

export default {
  component: FeatureCard,
  title: "FeatureCard",
} as Meta;

const Template: Story<FeatureCardProps> = (args) => (
  <Container py={10}>
    <FeatureCard {...args} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque.",
  heading: "Heading",
  icon: RiStarFill,
  maxW: "420px",
};
