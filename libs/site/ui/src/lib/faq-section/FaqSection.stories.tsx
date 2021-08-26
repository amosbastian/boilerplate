import { Story, Meta } from "@storybook/react";
import { FaqSection, FaqSectionProps } from "./FaqSection";

export default {
  component: FaqSection,
  title: "FaqSection",
} as Meta;

const Template: Story<FaqSectionProps> = (args) => <FaqSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  faq: [
    { questionName: "pricing:question-1", acceptedAnswerText: "pricing:answer-1" },
    { questionName: "pricing:question-2", acceptedAnswerText: "pricing:answer-2" },
    { questionName: "pricing:question-3", acceptedAnswerText: "pricing:answer-3" },
    { questionName: "pricing:question-4", acceptedAnswerText: "pricing:answer-4" },
  ],
  heading: "Frequently asked questions",
};
