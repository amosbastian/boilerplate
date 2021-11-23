import { Container } from "@boilerplate/shared/ui";
import { ProfileSettings } from "@boilerplate/site-feature";
import { AccountSettingsForm, getLayout, PageHeading, SettingsSection } from "@boilerplate/site/ui";
import { handleOryRedirect } from "@boilerplate/site/utility";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(true, "/login", context.req.headers.cookie);
};

export default function Settings() {
  const { t } = useTranslation("settings");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container pb={{ base: 4, md: 10 }}>
        <SettingsSection>
          <ProfileSettings />
          <AccountSettingsForm />
        </SettingsSection>
      </Container>
    </>
  );
}

Settings.getLayout = getLayout;
