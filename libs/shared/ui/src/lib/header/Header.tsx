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
import { Logo } from "../logo/Logo";

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
  const hoverColor = useColorModeValue("gray.500", "whiteAlpha.700");

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
        <NextLink href="/">
          <a href="/">
            <Logo />
          </a>
        </NextLink>
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
