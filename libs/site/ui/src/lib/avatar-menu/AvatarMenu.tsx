import { useCreateLogoutHandler } from "@boilerplate/site/utility";
import { Avatar, Icon, Link as ChakraLink, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import { RiLogoutBoxLine, RiSettings2Line } from "react-icons/ri";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarMenuProps {}

export function AvatarMenu(props: AvatarMenuProps) {
  const { t } = useTranslation("common");

  const { handleLogout } = useCreateLogoutHandler();

  return (
    <Menu {...props}>
      <MenuButton data-testid="avatar-menu-button" borderRadius="50%" _focus={{ boxShadow: "outline" }}>
        <Avatar src={undefined} h={7} w={7} />
      </MenuButton>
      <MenuList data-testid="avatar-menu">
        <NextLink href="/settings" passHref>
          <MenuItem data-testid="settings" as={ChakraLink} icon={<Icon as={RiSettings2Line} boxSize={5} />}>
            {t("settings")}
          </MenuItem>
        </NextLink>
        <MenuDivider />
        <MenuItem
          data-testid="sign-out"
          as={ChakraLink}
          icon={<Icon as={RiLogoutBoxLine} boxSize={5} />}
          onClick={handleLogout}
        >
          {t("sign-out")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;
