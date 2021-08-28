import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { Container, ContainerProps } from "../container/Container";

export interface SectionProps extends BoxProps {
  containerProps?: ContainerProps;
  variant?: "transparent";
}

export const Section = ({ children, containerProps, maxW = "container.xl", variant, ...rest }: SectionProps) => {
  const styles = useMultiStyleConfig("Section", { variant });

  return (
    <Box as="section" __css={styles.section} {...rest}>
      <StylesProvider value={styles}>
        <Container {...containerProps} maxW={maxW}>
          {children}
        </Container>
      </StylesProvider>
    </Box>
  );
};
