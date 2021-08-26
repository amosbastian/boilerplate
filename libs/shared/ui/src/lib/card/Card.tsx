import type { BoxProps } from "@chakra-ui/react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

export type CardProps = BoxProps;

export function Card({ children, ...rest }: CardProps) {
  const styles = useMultiStyleConfig("Card", {});

  return (
    <Box __css={styles.card} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
