import { Card, CardContent, CardFooter, CardHeader } from "@boilerplate/shared/ui";
import type { GridProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export type PlanSettingsFormProps = GridProps;

export function PlanSettingsForm(props: PlanSettingsFormProps) {
  const { t } = useTranslation("settings");

  return (
    <Card as="form">
      <CardHeader title={t("plan-settings-title")} subtitle={t("plan-settings-subtitle")} />
      <CardContent {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum justo quis orci tempus faucibus.
        Vestibulum mattis volutpat tortor at.
      </CardContent>
      <CardFooter>
        <Button fontSize="sm">Manage plan</Button>
      </CardFooter>
    </Card>
  );
}

export default PlanSettingsForm;
