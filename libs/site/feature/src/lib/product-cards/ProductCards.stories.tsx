import { Story, Meta } from "@storybook/react";
import { ProductCards, ProductCardsProps } from "./ProductCards";

export default {
  component: ProductCards,
  title: "ProductCards",
} as Meta;

const Template: Story<ProductCardsProps> = (args) => <ProductCards {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mt: 10,
};
