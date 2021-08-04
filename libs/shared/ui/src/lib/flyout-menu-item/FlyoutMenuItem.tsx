import { Box, Heading, Icon, Link, MenuItem, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IconType } from "react-icons";
export interface FlyoutMenuItemProps {
  description: string;
  heading: string;
  href: string;
  iconType?: IconType;
}

export function FlyoutMenuItem({ description, heading, href, iconType }: FlyoutMenuItemProps) {
  const color = useColorModeValue("gray.600", "whiteAlpha.700");
  const hoverColor = useColorModeValue("gray.800", "whiteAlpha.800");
  const headingColor = useColorModeValue("gray.900", "white");

  return (
    <Box role="group" px={2}>
      <NextLink href={href} passHref>
        <MenuItem
          as={Link}
          minW="240px"
          py={3}
          borderRadius="lg"
          href={href}
          pl={iconType ? 3 : 5}
          pr={5}
          alignItems="flex-start"
          transitionProperty="background"
          transitionDuration="normal"
        >
          {iconType && (
            <Icon
              color={color}
              _groupHover={{ color: hoverColor, transitionDuration: "normal", transitionProperty: "color" }}
              as={iconType}
              mr={3}
              boxSize={5}
            />
          )}
          <Box>
            <Heading fontSize="md" color={headingColor} as="p">
              {heading}
            </Heading>
            <Text
              color={color}
              _groupHover={{ color: hoverColor, transitionDuration: "normal", transitionProperty: "color" }}
              fontWeight="normal"
            >
              {description}
            </Text>
          </Box>
        </MenuItem>
      </NextLink>
    </Box>
  );
}

export default FlyoutMenuItem;
