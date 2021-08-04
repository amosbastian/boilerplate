import type { ButtonProps, MenuButtonProps as ChakraMenuButtonProps } from "@chakra-ui/react";
import { Button, Icon, MenuButton as ChakraMenuButton } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

export interface MenuButtonProps {
  variant: ButtonProps["variant"];
}

export function MenuButton({ children, variant, ...rest }: MenuButtonProps & ChakraMenuButtonProps) {
  return (
    <ChakraMenuButton
      as={Button}
      fontSize="sm"
      rightIcon={<Icon fontSize="md" as={RiArrowDownSLine} />}
      display="inline-flex"
      fontWeight="medium"
      lineHeight={1.2}
      variant={variant}
      {...rest}
    >
      {children}
    </ChakraMenuButton>
  );
}

export default MenuButton;
