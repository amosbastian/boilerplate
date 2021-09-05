import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export interface ButtonLinkProps {
  children?: React.ReactNode;
  href: string;
}

export function ButtonLink({ children, href, ...rest }: ButtonLinkProps & ButtonProps) {
  return (
    <NextLink href={href} passHref>
      <Button as="a" {...rest}>
        {children}
      </Button>
    </NextLink>
  );
}

export default ButtonLink;
