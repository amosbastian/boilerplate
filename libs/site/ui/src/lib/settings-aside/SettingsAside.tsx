import { Stack, StackProps } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { IconType } from "react-icons";
import { AsideLink } from "../aside-link/AsideLink";

export interface SettingsAsideProps extends StackProps {
  links: {
    href: string;
    label: string;
    icon: IconType;
  }[];
}

export function SettingsAside({ links, ...rest }: SettingsAsideProps) {
  const { t } = useTranslation("settings");

  return (
    <Stack data-testid="settings-aside" alignSelf="flex-start" as="aside" spacing={2} {...rest}>
      {links.map(({ href, label, icon }) => (
        <AsideLink key={label} label={t(label)} href={href} icon={icon} />
      ))}
    </Stack>
  );
}

export default SettingsAside;
