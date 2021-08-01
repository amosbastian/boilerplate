import type { HeadingProps, TextProps } from "@chakra-ui/react";
import { Box, BoxProps, Heading, StylesProvider, Text, useMultiStyleConfig } from "@chakra-ui/react";
import { Container } from "../container/Container";

const SectionHeading = (props: HeadingProps) => (
  <Heading
    fontSize={{ base: "40px", xl: "48px" }}
    maxW={{ base: "424px", md: "740px" }}
    fontWeight="semibold"
    mb={6}
    {...props}
  />
);

const SectionDescription = (props: TextProps) => (
  <Text as="div" maxW={{ base: "424px", md: "60ch" }} mb={{ base: 16, md: 20 }} {...props} />
);

interface SectionProps {
  heading: string;
  description: string;
}

export const Section = ({ heading, description, children, ...rest }: SectionProps & BoxProps) => {
  const styles = useMultiStyleConfig("Section", {});

  return (
    <Box as="section" __css={styles.section} {...rest}>
      <StylesProvider value={styles}>
        <Container>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{description}</SectionDescription>
          {children}
        </Container>
      </StylesProvider>
    </Box>
  );
};
