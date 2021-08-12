import { getLayout } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function Faq() {
  const { t } = useTranslation("faq");

  return (
    <>
      <NextSeo title={t("meta-title")} />
    </>
  );
}

Faq.getLayout = getLayout;
