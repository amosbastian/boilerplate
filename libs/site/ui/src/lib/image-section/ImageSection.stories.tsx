import { Heading } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { ImageSection, ImageSectionProps } from "./ImageSection";

export default {
  component: ImageSection,
  title: "ImageSection",
} as Meta;

const Template: Story<ImageSectionProps> = (args) => <ImageSection {...args} />;

export const Right = Template.bind({});
Right.args = {
  heading: (
    <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
      Heading
    </Heading>
  ),
  subtitle: (
    <Heading as="h3" fontSize={{ base: "md", md: "xl" }} variant="secondary">
      Subtitle
    </Heading>
  ),
  imageProps: {
    src: "https://via.placeholder.com/1100x600",
    alt: "",
    width: { base: "100%", md: 1100 },
    height: { base: "320", md: 600 },
  },
  imageLocation: "right",
};

export const Left = Template.bind({});
Left.args = {
  ...Right.args,
  imageLocation: "left",
};

export const Center = Template.bind({});
Center.args = {
  ...Right.args,
  imageLocation: "center",
};
