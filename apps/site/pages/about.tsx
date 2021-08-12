import { getLayout } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <>
      <NextSeo title={t("meta-title")} />
    </>
  );
}

About.getLayout = getLayout;
