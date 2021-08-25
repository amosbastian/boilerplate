import { Meta, Story } from "@storybook/react";
import { ProductCard, ProductCardProps } from "./ProductCard";

export default {
  component: ProductCard,
  title: "ProductCard",
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

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
