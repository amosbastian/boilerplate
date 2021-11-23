import { Grid, GridProps, Stack } from "@chakra-ui/react";
import { RiAccountCircleLine, RiBankCardLine, RiLock2Line } from "react-icons/ri";
import { SettingsAside } from "../settings-aside/SettingsAside";
import { SettingsSelect } from "../settings-select/SettingsSelect";

const links = [
  {
    href: "/settings",
    label: "general",
    icon: RiAccountCircleLine,
  },
  {
    href: "/settings/billing",
    label: "billing",
    icon: RiBankCardLine,
  },
  {
    href: "/settings/security",
    label: "security",
    icon: RiLock2Line,
  },
];

export type SettingsSectionProps = GridProps;

export function SettingsSection({ children, ...rest }: SettingsSectionProps) {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "1fr 3fr" }}
      gridColumnGap={{ base: 2, md: 6 }}
      gridRowGap={6}
      {...rest}
    >
      <SettingsSelect display={{ lg: "none" }} links={links} />
      <SettingsAside display={{ base: "none", lg: "initial" }} top="84px" position="sticky" links={links} />
      <Stack spacing={6} {...rest}>
        {children}
      </Stack>
    </Grid>
  );
}

export default SettingsSection;
