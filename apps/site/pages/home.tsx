import { Container } from "@boilerplate/shared/ui";
import { UserWelcome } from "@boilerplate/site-feature";
import { getLayout, PageHeading } from "@boilerplate/site/ui";
import { handleOryRedirect } from "@boilerplate/site/utility";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(true, "/login", context.req.headers.cookie);
};

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container pb={{ base: 4, md: 10 }}>
        <UserWelcome />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
