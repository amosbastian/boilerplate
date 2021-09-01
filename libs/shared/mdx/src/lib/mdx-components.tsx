import { Image, Link, LinkProps } from "@boilerplate/shared/ui";
import { Heading, HeadingProps, Text, TextProps, useColorModeValue } from "@chakra-ui/react";
import { YouTube } from "./you-tube/YouTube";

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
  p: ({ children }: TextProps) => (
    <Text as="p" fontSize="md" my="1.25em">
      {children}
    </Text>
  ),
  Image,
  YouTube,
};
