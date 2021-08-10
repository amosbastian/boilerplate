import { Container, Logo } from "@boilerplate/shared/ui";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import AvatarMenu from "../avatar-menu/AvatarMenu";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header() {
  const backgroundColor = useColorModeValue("white", "blackAlpha.900");

  return (
    <Flex as="header" h={16} zIndex={1} position="fixed" w="100%" backgroundColor={backgroundColor}>
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <NextLink href="/home">
          <a href="/home">
            <Logo />
          </a>
        </NextLink>
        <AvatarMenu />
      </Container>
    </Flex>
  );
}

export default Header;
