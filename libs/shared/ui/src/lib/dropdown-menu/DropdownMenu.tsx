import type { ButtonProps, MenuProps } from "@chakra-ui/react";
import { Menu, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { MenuButton } from "../menu-button/MenuButton";
import { MenuList } from "../menu-list/MenuList";

const TIMEOUT_LENGTH = 200;

export interface DropdownMenuProps {
  children: React.ReactNode;
  label: string;
  variant?: ButtonProps["variant"];
}

export function DropdownMenu({ children, label, variant = "unstyled", ...rest }: DropdownMenuProps & MenuProps) {
  const [mouseOverButton, setMouseOverButton] = React.useState<boolean>(false);
  const [mouseOverMenu, setMouseOverMenu] = React.useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const enterButton = () => {
    setMouseOverButton(true);
  };

  const leaveButton = () => {
    setTimeout(() => {
      setMouseOverButton(false);
    }, TIMEOUT_LENGTH);
  };

  const enterMenu = () => {
    setMouseOverMenu(true);
  };

  const leaveMenu = () => {
    setTimeout(() => {
      setMouseOverMenu(false);
    }, TIMEOUT_LENGTH);
  };

  return (
    <Menu isOpen={isOpen || mouseOverButton || mouseOverMenu} onClose={onClose} {...rest}>
      <MenuButton variant={variant} onClick={onOpen} onMouseEnter={enterButton} onMouseLeave={leaveButton}>
        {label}
      </MenuButton>
      <MenuList onMouseEnter={enterMenu} onMouseLeave={leaveMenu}>
        {children}
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
