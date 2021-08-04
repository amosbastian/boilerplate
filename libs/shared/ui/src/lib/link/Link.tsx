import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export interface LinkProps {
  children?: React.ReactNode;
  href: string;
  variant?: "cta";
}

export function Link({ children, href, variant, ...rest }: LinkProps & ChakraLinkProps) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink colorScheme="primary" fontWeight="semibold" variant={variant} {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default Link;
