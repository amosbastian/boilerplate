import type { ContainerProps } from "@boilerplate/shared/ui";
import { Container } from "@boilerplate/shared/ui";
import { Flex, Heading } from "@chakra-ui/react";

export interface PageHeadingProps extends ContainerProps {
  actions?: React.ReactNode;
  heading: string;
}

export function PageHeading({ actions, heading, ...rest }: PageHeadingProps) {
  return (
    <Flex as="header">
      <Container
        display="flex"
        my={{ base: 8, lg: 12 }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ lg: "center" }}
        w="100%"
        {...rest}
      >
        <Heading as="h1" mb={{ base: actions ? 6 : 0, lg: 0 }}>
          {heading}
        </Heading>
        {actions}
      </Container>
    </Flex>
  );
}

export default PageHeading;
