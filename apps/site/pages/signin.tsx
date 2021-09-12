import { Logo } from "@boilerplate/shared/ui";
import { SignInForm } from "@boilerplate/site/ui";
import { Center, Heading, useColorModeValue } from "@chakra-ui/react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getSession, providers } from "next-auth/client";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
      props: {
        providers: [],
      },
    };
  }

  return {
    props: {
      providers: await providers(),
    },
  };
};

export default function Signin({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation("signin");
  const bg = useColorModeValue("gray.50", "gray.900");

  const nonEmailProviders = providers ? Object.values(providers).filter((provider) => provider.id !== "email") : [];

  return (
    <Center height="-webkit-fill-available" flexDirection="column" px={4} justifyContent="center" bg={bg}>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
      <Logo />
      <Heading size="lg" mt={4}>
        {t("heading")}
      </Heading>
      <SignInForm providers={nonEmailProviders} />
    </Center>
  );
}
