import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";

export interface LinkProps extends ChakraLinkProps {
  children?: React.ReactNode;
  href: string;
  variant?: "cta";
  nextLinkProps?: React.PropsWithChildren<Omit<NextLinkProps, "href">>;
}

export function Link({ children, href, nextLinkProps, variant, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref {...nextLinkProps}>
      <ChakraLink colorScheme="primary" fontWeight="semibold" variant={variant} {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default Link;
