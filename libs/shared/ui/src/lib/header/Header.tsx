import type { ModalProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  StackDivider,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import * as React from "react";
import type { IconType } from "react-icons";
import {
  RiBook3Fill,
  RiGroupFill,
  RiMenuFill,
  RiPhoneFill,
  RiPriceTag3Fill,
  RiQuestionAnswerFill,
  RiQuestionLine,
} from "react-icons/ri";
import { Container } from "../container/Container";
import { DropdownMenu } from "../dropdown-menu/DropdownMenu";
import { FlyoutMenuItem } from "../flyout-menu-item/FlyoutMenuItem";
import { Link } from "../link/Link";

const HEADER_HEIGHT = 64;

type NavItem = {
  id: string;
  links: { href: string; id: string; icon: IconType }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: "features",
    links: [
      { href: "#", id: "feature-1", icon: RiQuestionLine },
      { href: "#", id: "feature-2", icon: RiQuestionLine },
    ],
  },
  {
    id: "resources",
    links: [
      { href: "/blog", id: "blog", icon: RiBook3Fill },
      { href: "/about", id: "about", icon: RiGroupFill },
      { href: "/faq", id: "faq", icon: RiQuestionAnswerFill },
      { href: "/contact", id: "contact", icon: RiPhoneFill },
    ],
  },
  { id: "pricing", links: [{ href: "/pricing", id: "pricing", icon: RiPriceTag3Fill }] },
];

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const HeaderLink = ({ children, href, onClick }: HeaderLinkProps) => {
  const hoverColor = useColorModeValue("gray.500", "whiteAlpha.600");

  return (
    <Link fontSize="sm" _hover={{ color: hoverColor }} href={href} onClick={onClick} fontWeight="medium">
      {children}
    </Link>
  );
};

interface MobileNavListProps {
  onClick?: () => void;
  headerNavItem: NavItem;
}

const MobileNavList = ({ onClick, headerNavItem }: MobileNavListProps) => {
  const { t } = useTranslation("common");
  const color = useColorModeValue("gray.500", "whiteAlpha.600");
  return (
    <Box as="section" px={6} _last={{ pb: 8 }}>
      {headerNavItem.links.length > 1 && (
        <Heading as="h2" fontSize="sm" mb={4} color={color} fontWeight="semibold" textTransform="uppercase">
          {t(headerNavItem.id)}
        </Heading>
      )}
      <Grid gridTemplateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3}>
        {headerNavItem.links.map((link) => (
          <HeaderLink href={link.href} onClick={onClick}>
            <Icon as={link.icon} mr={2} color={color} />
            {t(link.id)}
          </HeaderLink>
        ))}
      </Grid>
    </Box>
  );
};

const NavModal = ({ isOpen, onClose }: Pick<ModalProps, "isOpen" | "onClose">) => {
  const { t } = useTranslation("common");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent width="calc(100% - 32px)" marginTop={4}>
        <ModalHeader />
        <ModalCloseButton />
        <VStack spacing={8} as="nav" alignItems="start" divider={<StackDivider opacity={0.6} />}>
          {NAV_ITEMS.map((navItem) => {
            return <MobileNavList key={navItem.id} onClick={onClose} headerNavItem={navItem} />;
          })}
        </VStack>
        <Divider />
        <ModalFooter>
          <NextLink href="/signin">
            <Button as="a" colorScheme="primary" width="100%">
              {t("sign-in")}
            </Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header() {
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -HEADER_HEIGHT && !scrolled) {
      setScrolled(true);
    } else if (currPos.y >= -HEADER_HEIGHT && scrolled) {
      setScrolled(false);
    }
  });

  const backgroundColor = useColorModeValue("whiteAlpha.900", "blackAlpha.900");
  const borderBottomColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      as="header"
      h={16}
      zIndex={1}
      position="fixed"
      w="100%"
      backgroundColor={scrolled ? backgroundColor : "transparent"}
      borderBottom="1px solid"
      borderBottomColor={scrolled ? borderBottomColor : "transparent"}
    >
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <svg width="132" height="35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.51 11.26h3.21v13h-3.21v-13zM43 19.37c0-3.22 2-5.15 5-5.15s5 1.93 5 5.15c0 3.22-1.93 5.17-5 5.17-3.07 0-5-1.88-5-5.17zm6.82 0c0-1.77-.69-2.81-1.79-2.81s-1.78 1-1.78 2.81.68 2.8 1.78 2.8 1.81-.99 1.81-2.79l-.02-.01zm4.46 5.56h3.1a1.66 1.66 0 001.74 1c1.23 0 1.87-.66 1.87-1.64v-1.8H61a3.07 3.07 0 01-3 1.75c-2.35 0-3.91-1.79-3.91-4.87s1.49-5 4-5a3.07 3.07 0 013 1.89H61v-1.81h3.18v9.74c0 2.35-2.08 3.82-5.14 3.82-2.78-.01-4.56-1.28-4.74-3.07l-.02-.01zM61 19.37c0-1.57-.72-2.56-1.86-2.56-1.14 0-1.84 1-1.84 2.56s.69 2.48 1.84 2.48c1.15 0 1.86-.85 1.86-2.48zm4.45 0c0-3.22 2-5.15 5-5.15s5 1.93 5 5.15c0 3.22-1.94 5.17-5 5.17s-4.98-1.88-4.98-5.17h-.02zm6.82 0c0-1.77-.7-2.81-1.79-2.81s-1.78 1-1.78 2.81.68 2.8 1.78 2.8 1.81-.99 1.81-2.79l-.02-.01zm4.48-7.29a1.64 1.64 0 111.64 1.57 1.582 1.582 0 01-1.62-1.56l-.02-.01zm0 2.36H80v9.86h-3.2l-.05-9.86zm14.94 4.93c0 3.21-1.44 5.07-3.89 5.07a3.07 3.07 0 01-3-1.83h-.06v4.86h-3.21v-13h3.19v1.76h.06a3.09 3.09 0 013-1.9c2.52-.02 3.97 1.83 3.97 5.05l-.06-.01zm-3.27 0c0-1.56-.73-2.57-1.86-2.57-1.13 0-1.84 1-1.85 2.57-.01 1.57.72 2.56 1.85 2.56 1.13 0 1.92-.93 1.92-2.55l-.06-.01zm8.75-5.16c2.69 0 4.36 1.27 4.38 3.31h-2.93c0-.71-.59-1.15-1.47-1.15s-1.3.34-1.3.85.37.67 1.11.82l2.06.42c2 .42 2.8 1.22 2.8 2.71 0 2-1.85 3.36-4.6 3.36-2.75 0-4.54-1.32-4.67-3.33h3.11c.09.73.67 1.16 1.61 1.16.94 0 1.38-.3 1.38-.83s-.3-.62-1.07-.78l-1.86-.39c-1.93-.41-2.94-1.42-2.94-2.93.06-1.96 1.74-3.21 4.45-3.21l-.06-.01zm15.4 10.08h-3.11v-1.85h-.06a2.818 2.818 0 01-2.87 2.05 3.43 3.43 0 01-3.53-3.71v-6.33h3.21v5.64c0 1.16.61 1.79 1.61 1.79a1.642 1.642 0 001.61-1.88v-5.55h3.2l-.06 9.84zm1.55-9.85h3.12v1.9h.07a2.86 2.86 0 012.81-2.08 2.558 2.558 0 012.74 2.09h.14a2.998 2.998 0 013-2.09 3.118 3.118 0 013.23 3.35v6.69H126v-5.87c0-1-.47-1.56-1.38-1.56a1.403 1.403 0 00-1.363.993 1.416 1.416 0 00-.047.597v5.84h-3.06v-5.9c0-1-.49-1.53-1.37-1.53a1.429 1.429 0 00-1.43 1.61v5.82h-3.21l-.02-9.86zM32.16 12.11A9.88 9.88 0 0015 5.43H2.52v26.34h26.35V19.46a9.87 9.87 0 003.29-7.35zm-5.07 0a4.82 4.82 0 11-9.64.02 4.82 4.82 0 019.64-.02zM23.8 26.7H7.59V10.5h4.94a9.554 9.554 0 00-.15 1.61A9.9 9.9 0 0022.27 22a9.67 9.67 0 001.53-.13v4.83z" />
        </svg>
        <IconButton display={{ base: "flex", lg: "none" }} aria-label={t("open-menu")} variant="ghost" onClick={onOpen}>
          <Icon as={RiMenuFill} />
        </IconButton>
        <NavModal isOpen={isOpen} onClose={onClose} />
        <HStack spacing={8} as="nav" display={{ base: "none", lg: "flex" }} alignItems="baseline">
          {NAV_ITEMS.map((navItem) => {
            if (navItem.links.length > 1) {
              return (
                <DropdownMenu label={t(navItem.id)}>
                  {navItem.links.map((link) => (
                    <FlyoutMenuItem
                      key={link.id}
                      href={link.href}
                      heading={t(link.id)}
                      description={t(`${link.id}-description`)}
                      iconType={link.icon}
                    />
                  ))}
                </DropdownMenu>
              );
            }

            return (
              <HeaderLink key={navItem.id} href={navItem.links[0].href}>
                {t(navItem.links[0].id)}
              </HeaderLink>
            );
          })}
        </HStack>
        <Box display={{ base: "none", lg: "flex" }}>
          <NextLink href="/signin">
            <Button colorScheme="primary">{t("sign-in")}</Button>
          </NextLink>
        </Box>
      </Container>
    </Flex>
  );
}

export default Header;
