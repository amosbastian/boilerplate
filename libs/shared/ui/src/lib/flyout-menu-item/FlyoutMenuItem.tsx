import { Box, Heading, Icon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { Link, LinkProps } from "../link/Link";

export const MenuLink = (props: LinkProps) => {
  const bg = useColorModeValue("gray.100", "gray.800");

  return <Link _hover={{ bg }} display="flex" px={5} py={3} borderRadius="lg" {...props} />;
};

export interface FlyoutMenuItemProps {
  description: string;
  heading: string;
  href: string;
  iconType?: IconType;
}

export function FlyoutMenuItem({ description, heading, href, iconType }: FlyoutMenuItemProps) {
  const color = useColorModeValue("gray.600", "whiteAlpha.600");
  const hoverColor = useColorModeValue("gray.700", "whiteAlpha.800");

  return (
    <ListItem>
      <MenuLink href={href}>
        <Box role="group" display="flex">
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
            <Heading fontSize="md">{heading}</Heading>
            <Text
              color={color}
              _groupHover={{ color: hoverColor, transitionDuration: "normal", transitionProperty: "color" }}
              fontWeight="normal"
            >
              {description}
            </Text>
          </Box>
        </Box>
      </MenuLink>
    </ListItem>
  );
}

export default FlyoutMenuItem;
