import { Section } from "@boilerplate/shared/ui";
import { Flex, Heading } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta: React.ReactNode;
  image: React.ReactNode;
}

export function Hero({ title, subtitle, cta, image }: HeroProps) {
  return (
    <Section
      containerProps={{
        display: { base: "flex", lg: "grid" },
        gridColumnGap: { md: 10, xl: 20 },
        gridRowGap: { base: 8, md: 16 },
        gridTemplateColumns: { lg: "2fr 3fr" },
        flexDirection: { base: "column", lg: "row" },
        justifyContent: "space-between",
      }}
      variant="transparent"
      py={{ base: 20, lg: 44 }}
    >
      <Flex direction="column" alignItems={{ base: "center", lg: "flex-start" }} w="100%">
        <Heading as="h1" fontSize={{ base: "4xl", md: "7xl" }} mb={6} maxW="2xl">
          {title}
        </Heading>
        <Heading variant="secondary" as="h2" fontSize={{ base: "md", md: "2xl" }} mb={{ base: 8, md: 16 }}>
          {subtitle}
        </Heading>
        {cta}
      </Flex>
      {image}
    </Section>
  );
}

export default Hero;
