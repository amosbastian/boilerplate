import { Container } from "@boilerplate/shared/ui";
import { PlanSettings } from "@boilerplate/site-feature";
import { getLayout, PageHeading, SettingsSection } from "@boilerplate/site/ui";
import { handleOryRedirect } from "@boilerplate/site/utility";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(true, "/login", context.req.headers.cookie);
};

export default function Billing() {
  const { t } = useTranslation("settings");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container pb={{ base: 4, md: 10 }}>
        <SettingsSection>
          <PlanSettings />
        </SettingsSection>
      </Container>
    </>
  );
}

Billing.getLayout = getLayout;
