import { getLayout } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <>
      <NextSeo title={t("meta-title")} />
    </>
  );
}

Contact.getLayout = getLayout;
