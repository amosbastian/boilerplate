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
  const color = useColorModeValue("gray.700", "whiteAlpha.900");
  const hoverColor = useColorModeValue("gray.900", "white");

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

  const onClick = () => {
    setMouseOverMenu(false);
    setMouseOverButton(false);
  };

  const open = isOpen || mouseOverButton || mouseOverMenu;

  return (
    <Menu isOpen={open} onClose={onClose} {...rest}>
      <MenuButton
        variant={variant}
        onClick={onOpen}
        onMouseEnter={enterButton}
        onMouseLeave={leaveButton}
        color={variant === "unstyled" ? (open ? hoverColor : color) : "initial"}
      >
        {label}
      </MenuButton>
      <MenuList onMouseEnter={enterMenu} onMouseLeave={leaveMenu} overflow="hidden">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClick });
          }
          return child;
        })}
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
