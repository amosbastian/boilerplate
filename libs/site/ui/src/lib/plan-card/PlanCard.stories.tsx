import { Meta, Story } from "@storybook/react";
import { PlanCard, PlanCardProps } from "./PlanCard";

export default {
  component: PlanCard,
  title: "PlanCard",
} as Meta;

const Template: Story<PlanCardProps> = (args) => <PlanCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  plan: {
    id: "1",
    name: "Basic",
    prices: [
      {
        currency: "GBP",
        unitAmount: 300,
        recurring: { interval: "month" },
      },
    ],
    metadata: {},
  },
};

export const Recommended = Template.bind({});
Recommended.args = {
  ...Primary.args,
  recommended: true,
};
