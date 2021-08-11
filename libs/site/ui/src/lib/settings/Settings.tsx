import { Grid, GridProps, Stack } from "@chakra-ui/react";
import { SettingsAside } from "../settings-aside/SettingsAside";

export type SettingsProps = GridProps;

export function Settings({ children, ...rest }: SettingsProps) {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 3fr" }} gap={6} minHeight="80vh" {...rest}>
      <SettingsAside />
      <Stack spacing={6} {...rest}>
        {children}
      </Stack>
    </Grid>
  );
}

export default Settings;
