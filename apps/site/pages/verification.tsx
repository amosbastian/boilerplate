import { Card, Link, Logo } from "@boilerplate/shared/ui";
import { FlowForm } from "@boilerplate/site/ui";
import { handleGetFlowError, handleOryRedirect, oryBrowserClient } from "@boilerplate/site/utility";
import { Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { SelfServiceVerificationFlow, SubmitSelfServiceVerificationFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(false, "/home", context.req.headers.cookie);
};

export default function Verification() {
  const { t } = useTranslation("verification");
  const bg = useColorModeValue("gray.50", "gray.900");
  const [flow, setFlow] = React.useState<SelfServiceVerificationFlow>();
  const [flowLoading, setFlowLoading] = React.useState<boolean>(false);

  // Get ?flow=... from the URL
  const router = useRouter();
  const { return_to: returnTo, flow: flowId } = router.query;

  const handleFlowError = handleGetFlowError(router, "verification", setFlow);

  React.useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return;
    }

    async function fetchFlow() {
      setFlowLoading(true);
      // If ?flow=.. was in the URL, we fetch it
      if (flowId) {
        try {
          const { data } = await oryBrowserClient.getSelfServiceVerificationFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          switch (error.response?.status) {
            case 410:
              // Status code 410 means the request has expired - so let's load a fresh flow!
              break;
            case 403:
              // Status code 403 implies some other issue (e.g. CSRF) - let's reload!
              return router.push("/verification");
          }

          throw error;
        }

        setFlowLoading(false);
        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await oryBrowserClient.initializeSelfServiceVerificationFlowForBrowsers(
          returnTo ? String(returnTo) : undefined,
        );
        setFlow(data);
      } catch (error) {
        switch (error.response?.status) {
          case 400:
            // Status code 400 implies the user is already signed in
            return router.push("/");
        }

        throw error;
      }

      setFlowLoading(false);
    }

    fetchFlow();
  }, [flowId, router, router.isReady, returnTo, flow]);

  const onSubmit = async (values: SubmitSelfServiceVerificationFlowBody) => {
    // On submission, add the flow ID to the URL but do not navigate. This prevents the user losing
    // his data when she/he reloads the page.
    try {
      await router.push(`/verification?flow=${flow?.id}`, undefined, { shallow: true });
      const { data } = await oryBrowserClient.submitSelfServiceVerificationFlow(String(flow?.id), undefined, values);

      setFlow(data);
    } catch (error) {
      try {
        await handleFlowError(error);
      } catch (error) {
        switch (error.response?.status) {
          case 400:
            setFlow(error.response?.data);
            return;
        }

        return Promise.reject(error);
      }
    }
  };

  return (
    <Center height="-webkit-fill-available" flexDirection="column" px={4} justifyContent="center" bg={bg}>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
      <Logo />
      <Heading as="h1" size="lg" mt={4} mb={4}>
        {t("heading")}
      </Heading>
      <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
        <FlowForm flow={flow} onSubmit={onSubmit} flowLoading={flowLoading} />
      </Card>
      <Center fontSize="sm" mt={4}>
        <Trans
          i18nKey="verification:go-back"
          components={{
            link: <Link data-testid="login" variant="cta" href="/login" />,
          }}
        />
      </Center>
    </Center>
  );
}
