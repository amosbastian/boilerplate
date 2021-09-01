import { Card, CardProps } from "@boilerplate/shared/ui";
import { Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import type { IconType } from "react-icons";

export interface FeatureCardProps extends CardProps {
  description: string;
  heading: string;
  icon: IconType;
}

export function FeatureCard({ description, heading, icon, ...rest }: FeatureCardProps) {
  const iconColor = useColorModeValue("primary.500", "primary.200");

  return (
    <Card px={{ base: 6, sm: 8, md: 12 }} py={{ base: 6, md: 12 }} {...rest}>
      <Icon as={icon} color={iconColor} mb={6} fontSize="xl" />
      <Heading as="h5" fontSize="xl" mb={4}>
        {heading}
      </Heading>
      <Text variant="secondary" fontSize="xl">
        {description}
      </Text>
    </Card>
  );
}

export default FeatureCard;
