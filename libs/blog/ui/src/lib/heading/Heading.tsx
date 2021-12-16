import type { FrontMatter } from "@boilerplate/markdown";
import { configuration } from "@boilerplate/shared/configuration";
import { Image, Link } from "@boilerplate/shared/ui";
import { Badge, Box, Flex, Heading as ChakraHeading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useTranslation from "next-translate/useTranslation";
import { RiArrowLeftLine } from "react-icons/ri";

dayjs.extend(relativeTime);

export interface HeadingProps {
  frontMatter: FrontMatter;
}

export function Heading({ frontMatter }: HeadingProps) {
  const { t } = useTranslation();
  const colour = useColorModeValue("gray.600", "whiteAlpha.700");
  const hoverColour = useColorModeValue("primary.600", "primary.200");

  return (
    <Box mb={8}>
      <Link
        href={`${configuration.BASE_URL_SITE}/blog`}
        display="flex"
        alignItems="center"
        mb={4}
        color={colour}
        _hover={{ color: hoverColour }}
      >
        <Icon as={RiArrowLeftLine} mr={2} />
        {t("back")}
      </Link>
      <ChakraHeading as="h1" size="2xl" mb={8}>
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
      {frontMatter.dateModified && frontMatter.dateModified !== frontMatter.datePublished ? (
        <Badge mt={4}>{t("last-updated", { lastUpdated: dayjs(frontMatter.dateModified).fromNow() })}</Badge>
      ) : null}
    </Box>
  );
}

export default Heading;
