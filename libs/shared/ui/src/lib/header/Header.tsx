import { configuration } from "@boilerplate/shared/configuration";
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
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import { useRouter } from "next/router";
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
      { href: "/features/feature-1", id: "feature-1", icon: RiQuestionLine },
      { href: "/features/feature-2", id: "feature-2", icon: RiQuestionLine },
      { href: "/features", id: "feature-overview", icon: RiQuestionLine },
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

const HeaderLink = ({ children, href, onClick }: HeaderLinkProps) => (
  <Link fontSize="sm" href={href} onClick={onClick} fontWeight="medium">
    {children}
  </Link>
);

interface MobileNavListProps {
  onClick?: () => void;
  headerNavItem: NavItem;
}

const MobileNavList = ({ onClick, headerNavItem }: MobileNavListProps) => {
  const { t } = useTranslation("common");
  const color = useColorModeValue("gray.500", "whiteAlpha.600");
  const { basePath } = useRouter();
  const isBlog = basePath === "/blog";

  return (
    <Box as="section" px={6} _last={{ pb: 8 }}>
      {headerNavItem.links.length > 1 && (
        <Heading as="h2" fontSize="sm" mb={4} color={color} fontWeight="semibold" textTransform="uppercase">
          {t(headerNavItem.id)}
        </Heading>
      )}
      <Grid gridTemplateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3}>
        {headerNavItem.links.map((link) => (
          <HeaderLink href={isBlog ? `${configuration.BASE_URL_SITE}${link.href}` : link.href} onClick={onClick}>
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
  const { basePath } = useRouter();
  const isBlog = basePath === "/blog";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent data-testid="menu-button-content" width="calc(100% - 32px)" marginTop={4}>
        <ModalHeader />
        <ModalCloseButton />
        <VStack spacing={8} alignItems="start" divider={<StackDivider opacity={0.6} />}>
          {NAV_ITEMS.map((navItem) => {
            return <MobileNavList key={navItem.id} onClick={onClose} headerNavItem={navItem} />;
          })}
        </VStack>
        <Divider />
        <ModalFooter>
          <NextLink href={isBlog ? `${configuration.BASE_URL_SITE}/login` : "/login"} passHref>
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
  const router = useRouter();
  const { basePath } = useRouter();
  const isBlog = basePath === "/blog";

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -HEADER_HEIGHT && !scrolled) {
      setScrolled(true);
    } else if (currPos.y >= -HEADER_HEIGHT && scrolled) {
      setScrolled(false);
    }
  });

  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.100");
  const boxShadow = useColorModeValue("sm", undefined);
  const borderBottomWidth = useColorModeValue(0, 1);

  return (
    <Flex
      as="nav"
      h={16}
      zIndex={1}
      position="sticky"
      top={0}
      w="100%"
      bg={bg}
      borderBottomStyle="solid"
      borderBottomWidth={borderBottomWidth}
      boxShadow={scrolled ? boxShadow : undefined}
      borderBottomColor={scrolled ? borderColor : "transparent"}
      transition="background, box-shadow"
      transitionDuration="normal"
    >
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <NextLink href="/" passHref>
          <a href="/">
            <VisuallyHidden>{t("home")}</VisuallyHidden>
            <Logo />
          </a>
        </NextLink>
        <IconButton
          data-testid="menu-button"
          display={{ base: "flex", lg: "none" }}
          aria-label={t("open-menu")}
          variant="ghost"
          onClick={onOpen}
        >
          <Icon as={RiMenuFill} />
        </IconButton>
        <NavModal isOpen={isOpen} onClose={onClose} />
        <HStack spacing={8} display={{ base: "none", lg: "flex" }} alignItems="baseline">
          {NAV_ITEMS.map((navItem) => {
            if (navItem.links.length > 1) {
              return (
                <DropdownMenu key={navItem.id} label={t(navItem.id)}>
                  {navItem.links.map((link) => (
                    <FlyoutMenuItem
                      key={link.id}
                      href={isBlog ? `${configuration.BASE_URL_SITE}${link.href}` : link.href}
                      heading={t(link.id)}
                      description={t(`${link.id}-description`)}
                      iconType={link.icon}
                    />
                  ))}
                </DropdownMenu>
              );
            }

            return (
              <HeaderLink
                key={navItem.id}
                href={isBlog ? `${configuration.BASE_URL_SITE}${navItem.links[0].href}` : navItem.links[0].href}
              >
                {t(navItem.links[0].id)}
              </HeaderLink>
            );
          })}
        </HStack>
        <Box display={{ base: "none", lg: "flex" }}>
          <NextLink href={isBlog ? `${configuration.BASE_URL_SITE}/login` : "/login"} passHref>
            <Button data-testid="login" colorScheme="primary">
              {t("sign-in")}
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Flex>
  );
}

export default Header;
