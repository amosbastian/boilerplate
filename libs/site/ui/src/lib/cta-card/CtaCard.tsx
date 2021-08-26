import { Box, Heading, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { Card } from "@boilerplate/shared/ui";

export interface CtaCardProps extends BoxProps {
  heading: string;
  subtitle: string;
}

export function CtaCard({ children, heading, subtitle, ...rest }: CtaCardProps) {
  console.log(rest);
  return (
    <Card
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ md: "center" }}
      px={{ base: 8, sm: 12, md: 12 }}
      py={{ base: 8, sm: 12, md: 16 }}
      {...rest}
    >
      <Box>
        <Heading as="h3" mb={2}>
          {heading}
        </Heading>
        <Text mb={{ base: 8, md: 0 }} fontSize="lg">
          {subtitle}
        </Text>
      </Box>
      {children}
    </Card>
  );
}

export default CtaCard;
