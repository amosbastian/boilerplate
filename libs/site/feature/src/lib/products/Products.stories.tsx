import { Story, Meta } from "@storybook/react";
import { Products, ProductsProps } from "./Products";

export default {
  component: Products,
  title: "Products",
} as Meta;

const Template: Story<ProductsProps> = (args) => <Products {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mt: 10,
};
