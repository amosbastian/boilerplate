import { StackProps, useBreakpointValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiAccountCircleLine, RiBankCardLine, RiLock2Line } from "react-icons/ri";
import LinkAside from "../link-aside/LinkAside";

export type SettingsAsideProps = StackProps;

export function SettingsAside(props: SettingsAsideProps) {
  const { t } = useTranslation("settings");
  const profileSettingsHref = useBreakpointValue({ base: "/settings/general", lg: "/settings" }, "/settings/general");

  return (
    <LinkAside
      data-testid="settings-aside"
      alignSelf="flex-start"
      links={[
        {
          href: profileSettingsHref ?? "/settings",
          label: t("general"),
          icon: RiAccountCircleLine,
        },
        {
          href: "/settings/billing",
          label: t("plan-and-billing"),
          icon: RiBankCardLine,
        },
        {
          href: "/settings/security",
          label: t("security"),
          icon: RiLock2Line,
        },
      ]}
      {...props}
    />
  );
}

export default SettingsAside;
