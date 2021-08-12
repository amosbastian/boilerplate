import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import CardContent from "../card-content/CardContent";
import CardFooter from "../card-footer/CardFooter";
import CardHeader from "../card-header/CardHeader";
import { Container } from "../container/Container";
import { Card, CardProps } from "./Card";

export default {
  component: Card,
  title: "Card",
} as Meta;

const Template: Story<CardProps> = (args) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex w="100%" h="100%" bg={bg} py={10}>
      <Container>
        <Card {...args} />
      </Container>
    </Flex>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <CardHeader title="Title" subtitle="subtitle" />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus dolor, dapibus dapibus ultricies et,
        fringilla blandit justo. Fusce ac hendrerit justo. Phasellus leo purus, venenatis nec dolor id, tincidunt
        imperdiet purus. Praesent sagittis odio lacus, quis mollis erat aliquet id. Mauris luctus magna mauris, id
        tincidunt dolor lacinia eu. Vivamus convallis sagittis lacus lacinia sodales. Vivamus at enim est. Nunc in est
        pellentesque, facilisis leo semper, mollis sem. Duis vel mi eget est faucibus efficitur. Suspendisse ultrices
        scelerisque faucibus.
      </CardContent>
      <CardFooter>
        <Button>Button</Button>
      </CardFooter>
    </>
  ),
};
