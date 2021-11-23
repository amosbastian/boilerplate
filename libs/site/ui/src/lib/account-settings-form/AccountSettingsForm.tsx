import { Card, CardContent, CardHeader, ChangeLanguage, ChangeTheme } from "@boilerplate/shared/ui";
import type { GridProps } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export type AccountSettingsFormProps = GridProps;

export function AccountSettingsForm(props: AccountSettingsFormProps) {
  const { t } = useTranslation("settings");

  return (
    <Card data-testid="account-settings-form" as="form">
      <CardHeader title={t("account-settings-title")} subtitle={t("account-settings-subtitle")} />
      <CardContent
        display="grid"
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        gridColumnGap={6}
        gridRowGap={6}
        {...props}
      >
        <FormControl>
          <FormLabel htmlFor="language" fontSize="sm">
            {t("language-label")}
          </FormLabel>
          <ChangeLanguage withIcon={false} variant="outline" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="theme" fontSize="sm">
            {t("theme-label")}
          </FormLabel>
          <ChangeTheme withIcon={false} variant="outline" />
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default AccountSettingsForm;
