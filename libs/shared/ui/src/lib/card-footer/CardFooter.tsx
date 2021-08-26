import type { BoxProps } from "@chakra-ui/react";
import { Box, HStack, useMultiStyleConfig } from "@chakra-ui/react";

export type CardFooterProps = BoxProps;

export function CardFooter({ children, ...rest }: CardFooterProps) {
  const styles = useMultiStyleConfig("Card", {});

  return (
    <Box __css={styles.footer} {...rest}>
      <HStack spacer={4}>{children}</HStack>
    </Box>
  );
}

export default CardFooter;
