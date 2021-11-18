import { Card, Link, Logo } from "@boilerplate/shared/ui";
import { oryBrowserClient } from "@boilerplate/site/utility";
import { Center, Collapse, Heading, Spinner, useColorModeValue } from "@chakra-ui/react";
import { SelfServiceError } from "@ory/kratos-client";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

const Error: NextPage = () => {
  const { t } = useTranslation("error");
  const bg = useColorModeValue("gray.50", "gray.900");
  const [error, setError] = React.useState<SelfServiceError | string>();
  const [flowLoading, setFlowLoading] = React.useState<boolean>(false);

  // Get ?id=... from the URL
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    // If the router is not ready yet, or we already have an error, do nothing.
    if (!router.isReady || error) {
      return;
    }

    async function fetchFlow() {
      setFlowLoading(true);
      try {
        const { data } = await oryBrowserClient.getSelfServiceError(String(id));

        setError(data);
      } catch (error) {
        switch (error.response?.status) {
          case 404:
            // The error id could not be found. Let's just redirect home!
            return router.push("/");
          case 403:
            // The error id could not be fetched due to e.g. a CSRF issue. Let's just redirect home!
            return router.push("/");
          case 410:
            // The error id expired. Let's just redirect home!
            return router.push("/");
        }

        return Promise.reject(error);
      }

      setFlowLoading(false);
    }

    fetchFlow();
  }, [id, router, router.isReady, error]);

  if (!error) {
    return null;
  }

  return (
    <Center height="-webkit-fill-available" flexDirection="column" px={4} justifyContent="center" bg={bg}>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
      <Logo />
      <Heading as="h1" size="lg" mt={4} mb={4}>
        {t("heading")}
      </Heading>
      <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
        {flowLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : null}
        <Collapse in={Boolean(error)}>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </Collapse>
      </Card>
      <Center fontSize="sm" mt={4}>
        <Trans
          i18nKey="verification:go-back"
          components={{
            link: <Link variant="cta" href="/login" />,
          }}
        />
      </Center>
    </Center>
  );
};

export default Error;
