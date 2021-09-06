import { Container, Logo } from "@boilerplate/shared/ui";
import { Flex, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import AvatarMenu from "../avatar-menu/AvatarMenu";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.100");
  const { t } = useTranslation("common");

  return (
    <Flex
      as="nav"
      h={16}
      top={0}
      zIndex={1}
      position="sticky"
      w="100%"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderBottomWidth={1}
      borderBottomStyle="solid"
    >
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <NextLink href="/home">
          <a href="/home">
            <VisuallyHidden>{t("home")}</VisuallyHidden>
            <Logo />
          </a>
        </NextLink>
        <AvatarMenu />
      </Container>
    </Flex>
  );
}

export default Header;
