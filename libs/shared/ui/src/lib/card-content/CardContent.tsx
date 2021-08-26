import type { BoxProps } from "@chakra-ui/react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

export type CardContentProps = BoxProps;

export function CardContent({ children, ...rest }: CardContentProps) {
  const styles = useMultiStyleConfig("Card", {});

  return (
    <Box __css={styles.content} {...rest}>
      {children}
    </Box>
  );
}

export default CardContent;
