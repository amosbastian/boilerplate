import { Container } from "@boilerplate/shared/ui";
import { getLayout } from "@boilerplate/site/ui";
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

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Container>
      <NextSeo title={t("meta-title")} />
    </Container>
  );
}

Home.getLayout = getLayout;