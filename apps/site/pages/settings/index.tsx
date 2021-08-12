import { Container, Card } from "@boilerplate/shared/ui";
import { getLayout, PageHeading, SettingsSection, SettingsAside } from "@boilerplate/site/ui";
import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

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

export default function Settings() {
  const { t } = useTranslation("settings");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container>
        <SettingsAside position="relative" display={{ lg: "none" }} />
        <SettingsSection display={{ base: "none", lg: "grid" }}>
          <Card>Profile</Card>
        </SettingsSection>
      </Container>
    </>
  );
}

Settings.getLayout = getLayout;
