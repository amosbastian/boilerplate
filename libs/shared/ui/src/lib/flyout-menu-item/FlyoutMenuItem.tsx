import { Box, Heading, Icon, Link, MenuItem, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IconType } from "react-icons";
import type { MenuItemProps } from "@chakra-ui/react";

export interface FlyoutMenuItemProps extends MenuItemProps {
  description: string;
  heading: string;
  href: string;
  iconType?: IconType;
}

export function FlyoutMenuItem({ description, heading, href, iconType, ...rest }: FlyoutMenuItemProps) {
  const color = useColorModeValue("gray.600", "whiteAlpha.700");
  const hoverColor = useColorModeValue("gray.800", "whiteAlpha.800");
  const headingColor = useColorModeValue("gray.900", "white");

  return (
    <Box role="group" px={2}>
      <NextLink href={href} passHref>
        <MenuItem
          as={Link}
          minW="320px"
          py={5}
          borderRadius="lg"
          href={href}
          px={5}
          alignItems="flex-start"
          transitionProperty="background"
          transitionDuration="normal"
          {...rest}
        >
          {iconType && (
            <Icon
              mt={1}
              color={color}
              _groupHover={{ color: hoverColor, transitionDuration: "normal", transitionProperty: "color" }}
              as={iconType}
              mr={4}
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
