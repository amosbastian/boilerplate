import { Grid, GridProps, Stack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AsideLink } from "../aside-link/AsideLink";
import { SettingsAside } from "../settings-aside/SettingsAside";

export type SettingsSectionProps = GridProps;

export function SettingsSection({ children, ...rest }: SettingsSectionProps) {
  const { t } = useTranslation();

  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 3fr" }} gap={6} {...rest}>
      <AsideLink display={{ lg: "none" }} href="/settings" label={t("common:back")} icon={RiArrowLeftSLine} />
      <SettingsAside display={{ base: "none", lg: "initial" }} top="84px" position="sticky" />
      <Stack spacing={6} {...rest}>
        {children}
      </Stack>
    </Grid>
  );
}

export default SettingsSection;
