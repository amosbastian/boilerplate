import type { MenuProps } from "@chakra-ui/react";
import { Avatar, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarMenuProps {}

export function AvatarMenu(props: AvatarMenuProps) {
  const { t } = useTranslation("common");
  const [session] = useSession();

  const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    signOut();
  };

  return (
    <Menu {...props}>
      <MenuButton borderRadius="50%" _focus={{ boxShadow: "outline" }}>
        <Avatar
          name={session?.user?.email || session?.user?.name || undefined}
          src={session?.user?.image || undefined}
          h={7}
          w={7}
        />
      </MenuButton>
      <MenuList>
        <NextLink href="/api/auth/signout" passHref>
          <MenuItem as={ChakraLink} _hover={{ textDecoration: "none" }} onClick={handleSignOut}>
            {t("sign-out")}
          </MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;
