import type { BoxProps } from "@chakra-ui/react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export type CardProps = BoxProps;

export function Card({ children, ...rest }: CardProps) {
  const styles = useStyleConfig("Card");

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
