import { Section, SectionProps } from "@boilerplate/shared/ui";
import { Box, Flex, Heading } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiCheckFill, RiCupFill, RiGameFill, RiLockFill, RiStarFill, RiTimeFill } from "react-icons/ri";
import { FeatureCard, FeatureCardProps } from "../feature-card/FeatureCard";

const FEATURES: FeatureCardProps[] = [
  {
    icon: RiStarFill,
    heading: "feature-1-heading",
    description: "feature-1-long-description",
  },
  {
    icon: RiTimeFill,
    heading: "feature-2-heading",
    description: "feature-2-long-description",
  },
  {
    icon: RiLockFill,
    heading: "feature-3-heading",
    description: "feature-3-long-description",
  },
  {
    icon: RiCheckFill,
    heading: "feature-4-heading",
    description: "feature-4-long-description",
  },
  {
    icon: RiGameFill,
    heading: "feature-5-heading",
    description: "feature-5-long-description",
  },
  {
    icon: RiCupFill,
    heading: "feature-6-heading",
    description: "feature-6-long-description",
  },
];

export interface FeaturesProps extends SectionProps {
  title: string;
  subtitle: string;
}

export function Features({ title, subtitle, ...rest }: FeaturesProps) {
  const { t } = useTranslation("common");

  return (
    <Section {...rest}>
      <Flex direction="column" alignItems={{ base: "flex-start", md: "center" }} mb={{ base: 8, md: 16 }}>
        <Heading maxW={{ base: "100%", md: "42em" }} fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
          {title}
        </Heading>
        <Heading as="h3" fontSize={{ base: "md", md: "xl" }} variant="secondary">
          {subtitle}
        </Heading>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gridGap={{ base: 4, md: 6, lg: 8 }}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            heading={t(feature.heading)}
            description={t(feature.description)}
          />
        ))}
      </Box>
    </Section>
  );
}

export default Features;
