import type { FrontMatter } from "@boilerplate/markdown";
import { Image } from "@boilerplate/shared/ui";
import { Box, Flex, Heading as ChakraHeading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export interface HeadingProps {
  frontMatter: FrontMatter;
}

export function Heading({ frontMatter }: HeadingProps) {
  return (
    <Box mb={8}>
      <ChakraHeading as="h1" size="2xl" mb={4}>
        {frontMatter.title}
      </ChakraHeading>
      <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image h={6} w={6} src={`/blog${frontMatter.author.image}`} alt="" borderRadius="50%" mr={2} />
          <Text lineHeight={1} isTruncated>
            {frontMatter.author.name} /{" "}
            <time dateTime={frontMatter.datePublished}>{dayjs(frontMatter.datePublished).fromNow()}</time>
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
