import { Card, Container } from "@boilerplate/shared/ui";
import { getLayout, PageHeading, SettingsSection } from "@boilerplate/site/ui";
import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Billing() {
  const { t } = useTranslation("settings");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container>
        <SettingsSection>
          <Card>Billing</Card>
        </SettingsSection>
      </Container>
    </>
  );
}

Billing.getLayout = getLayout;
