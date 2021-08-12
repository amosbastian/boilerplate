import { getLayout } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function Pricing() {
  const { t } = useTranslation("pricing");

  return (
    <>
      <NextSeo title={t("meta-title")} />
    </>
  );
}

Pricing.getLayout = getLayout;
