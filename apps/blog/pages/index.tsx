import { Hero } from "@boilerplate/blog/ui";
import { Container, getLayout } from "@boilerplate/shared/ui";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

export default function Index() {
  const { t } = useTranslation("home");
  return (
    <>
      <NextSeo title={t("meta-title")} description={t("meta-title")} />
      <Hero />
    </>
  );
}

Index.getLayout = getLayout;
