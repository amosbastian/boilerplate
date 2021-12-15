import { Image, Link, LinkProps } from "@boilerplate/shared/ui";
import { Heading, HeadingProps, UnorderedList, ListItem, Text, TextProps, useColorModeValue } from "@chakra-ui/react";
import { YouTube } from "./you-tube/YouTube";
import type { ListProps, ListItemProps } from "@chakra-ui/react";

const CustomLink = ({ children, href, ...rest }: LinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  const color = useColorModeValue("primary.500", "primary.200");
  const hoverColor = useColorModeValue("primary.600", "primary.100");

  return (
    <Link color={color} _hover={{ color: hoverColor }} href={href} isExternal={!isInternalLink} {...rest}>
      {children}
    </Link>
  );
};

const CustomP = ({ children, ...rest }: TextProps) => {
  const colour = useColorModeValue("gray.700", "gray.400");

  return (
    <Text as="p" color={colour} fontSize="lg" my="1.75em" lineHeight="calc(1em + 0.625rem)" {...rest}>
      {children}
    </Text>
  );
};

const CustomStrong = ({ children }: TextProps) => {
  const colour = useColorModeValue("gray.900", "gray.200");

  return (
    <CustomP as="strong" fontWeight="semibold" color={colour}>
      {children}
    </CustomP>
  );
};

const CustomList = ({ children }: ListProps) => <UnorderedList spacing={3}>{children}</UnorderedList>;

const CustomListItem = ({ children }: ListItemProps) => {
  const colour = useColorModeValue("gray.700", "gray.400");
  return (
    <ListItem color={colour} fontSize="md">
      {children}
    </ListItem>
  );
};

export const mdxComponents = {
  a: CustomLink,
  h1: ({ children }: HeadingProps) => (
    <Heading as="h1" size="2xl" mb="1em">
      {children}
    </Heading>
  ),
  h2: ({ children }: HeadingProps) => (
    <Heading as="h2" size="md" mb="1em" mt="2em">
      {children}
    </Heading>
  ),
  h3: ({ children }: HeadingProps) => (
    <Heading as="h3" size="sm" mb="1em" mt="2em">
      {children}
    </Heading>
  ),
  p: CustomP,
  strong: CustomStrong,
  ul: CustomList,
  li: CustomListItem,
  Image,
  YouTube,
};
