import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { Container } from "../container/Container";

export type SectionProps = BoxProps;

export const Section = ({ children, ...rest }: BoxProps) => {
  const styles = useMultiStyleConfig("Section", {});

  return (
    <Box as="section" __css={styles.section} {...rest}>
      <StylesProvider value={styles}>
        <Container>{children}</Container>
      </StylesProvider>
    </Box>
  );
};
