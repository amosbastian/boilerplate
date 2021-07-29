import type { MenuListProps as ChakraMenuListProps } from "@chakra-ui/react";
import { Center, MenuList as ChakraMenuList, Spinner } from "@chakra-ui/react";

export interface MenuListProps extends ChakraMenuListProps {
  isLoading?: boolean;
}

export function MenuList({ children, isLoading, ...rest }: MenuListProps) {
  return (
    <ChakraMenuList {...rest}>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        children
      )}
    </ChakraMenuList>
  );
}

export default MenuList;
