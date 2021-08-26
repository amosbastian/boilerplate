import { Story, Meta } from "@storybook/react";
import { CtaCard, CtaCardProps } from "./CtaCard";
import { Button } from "@chakra-ui/react";

export default {
  component: CtaCard,
  title: "CtaCard",
} as Meta;

const Template: Story<CtaCardProps> = (args) => <CtaCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: "Heading",
  subtitle: "Subtitle",
  children: <Button colorScheme="primary">CTA</Button>,
};
