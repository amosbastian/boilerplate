import type { StackProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { AsideLink, AsideLinkProps } from "../aside-link/AsideLink";

export interface LinkAsideProps extends StackProps {
  links: AsideLinkProps[];
}

export function LinkAside({ links, ...rest }: LinkAsideProps) {
  return (
    <Stack as="aside" spacing={2} {...rest}>
      {links.map((link) => (
        <AsideLink key={link.label} {...link} />
      ))}
    </Stack>
  );
}

export default LinkAside;
