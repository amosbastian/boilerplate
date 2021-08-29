import type { FrontMatter } from "@boilerplate/markdown";
import { Image } from "@boilerplate/shared/ui";
import { Box, Flex, Heading as ChakraHeading, Text } from "@chakra-ui/react";

export interface HeadingProps {
  frontMatter: FrontMatter;
}

export function Heading({ frontMatter }: HeadingProps) {
  return (
    <Box>
      <ChakraHeading as="h1" size="2xl" mb={4}>
        {frontMatter.title}
      </ChakraHeading>
      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="baseline">
        <Flex mb={{ base: 2, md: 0 }} alignItems="center">
          <Image h={6} w={6} src={frontMatter.author.image} alt="" borderRadius="50%" mr={2} />
          <Text lineHeight={1} isTruncated>
            {frontMatter.author.name} / {frontMatter.date}
          </Text>
        </Flex>
        <Text variant="secondary" lineHeight={1}>
          {frontMatter.readingTime.text}
        </Text>
      </Flex>
    </Box>
  );
}

export default Heading;
