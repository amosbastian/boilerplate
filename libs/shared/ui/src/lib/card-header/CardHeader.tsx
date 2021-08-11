import type { BoxProps } from "@chakra-ui/react";
import { Box, Heading, Text, useMultiStyleConfig } from "@chakra-ui/react";

export interface CardHeaderProps extends BoxProps {
  heading: string;
  subtitle?: string;
}

export function CardHeader({ heading, subtitle, ...rest }: CardHeaderProps) {
  const styles = useMultiStyleConfig("Card", {});

  return (
    <Box sx={styles.header} {...rest}>
      <Box>
        <Heading as="h3" fontSize="md" mb={subtitle ? 1 : 0}>
          {heading}
        </Heading>
        {subtitle && <Text variant="secondary">{subtitle}</Text>}
      </Box>
    </Box>
  );
}

export default CardHeader;
