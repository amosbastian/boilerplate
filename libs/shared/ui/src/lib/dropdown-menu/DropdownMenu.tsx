import { ButtonProps, Menu, MenuProps, useColorModeValue, useDisclosure } from "@chakra-ui/react";
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
  const hoverColor = useColorModeValue("gray.500", "whiteAlpha.700");

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

  const open = isOpen || mouseOverButton || mouseOverMenu;

  return (
    <Menu isOpen={open} onClose={onClose} {...rest}>
      <MenuButton
        variant={variant}
        onClick={onOpen}
        onMouseEnter={enterButton}
        onMouseLeave={leaveButton}
        color={open && variant === "unstyled" ? hoverColor : undefined}
      >
        {label}
      </MenuButton>
      <MenuList onMouseEnter={enterMenu} onMouseLeave={leaveMenu} overflow="hidden">
        {children}
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
