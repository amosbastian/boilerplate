import type { StackProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { AsideLink, AsideLinkProps } from "../aside-link/AsideLink";

export interface LinkAsideProps extends StackProps {
  settingsLinks: AsideLinkProps[];
}

export function LinkAside({ settingsLinks, ...rest }: LinkAsideProps) {
  const { t } = useTranslation("settings");

  return (
    <Stack as="aside" p={3} spacing={2} {...rest}>
      {settingsLinks.map((settingsLink) => (
        <AsideLink key={settingsLink.label} {...settingsLink} label={t(settingsLink.label)} />
      ))}
    </Stack>
  );
}

export default LinkAside;
