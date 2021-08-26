import type { BoxProps } from "@chakra-ui/react";
import { Box, Heading, Text, useMultiStyleConfig } from "@chakra-ui/react";

export interface CardHeaderProps extends BoxProps {
  title: string;
  subtitle?: string;
}

export function CardHeader({ title, subtitle, ...rest }: CardHeaderProps) {
  const styles = useMultiStyleConfig("Card", {});

  return (
    <Box __css={styles.header} {...rest}>
      <Box>
        <Heading as="h3" fontSize="md" mb={subtitle ? 1 : 0}>
          {title}
        </Heading>
        {subtitle && <Text variant="secondary">{subtitle}</Text>}
      </Box>
    </Box>
  );
}

export default CardHeader;
