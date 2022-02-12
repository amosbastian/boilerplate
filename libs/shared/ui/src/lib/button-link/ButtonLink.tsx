import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import type { UrlObject } from "url";

type Url = string | UrlObject;
export interface ButtonLinkProps {
  as?: Url;
  children?: React.ReactNode;
  href: Url;
}

export function ButtonLink({ as, children, href, ...rest }: ButtonLinkProps & Omit<ButtonProps, "as">) {
  return (
    <NextLink as={as} href={href} passHref>
      <Button as="a" {...rest}>
        {children}
      </Button>
    </NextLink>
  );
}

export default ButtonLink;
