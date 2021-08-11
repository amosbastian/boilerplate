import type { StackProps } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiAccountCircleLine, RiBankCardLine } from "react-icons/ri";
import LinkAside from "../link-aside/LinkAside";

export type SettingsAsideProps = StackProps;

export function SettingsAside(props: SettingsAsideProps) {
  const { t } = useTranslation("settings");

  return (
    <LinkAside
      top="84px"
      position="sticky"
      alignSelf="flex-start"
      links={[
        {
          href: "/settings",
          label: t("profile"),
          icon: RiAccountCircleLine,
        },
        {
          href: "/settings/billing",
          label: t("plan-and-billing"),
          icon: RiBankCardLine,
        },
      ]}
      {...props}
    />
  );
}

export default SettingsAside;
