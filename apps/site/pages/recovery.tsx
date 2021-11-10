import { Card, Link, Logo } from "@boilerplate/shared/ui";
import { ory } from "@boilerplate/shared/utility/ory";
import { FlowForm } from "@boilerplate/site/ui";
import { handleOryRedirect, useHandleFlowError } from "@boilerplate/site/utility";
import { Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { SelfServiceRecoveryFlow, SubmitSelfServiceRecoveryFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(false, "/home", context.req.headers.cookie);
};

export default function Recovery() {
  const { t } = useTranslation("recovery");
  const bg = useColorModeValue("gray.50", "gray.900");
  const [flow, setFlow] = React.useState<SelfServiceRecoveryFlow>();

  // Get ?flow=... from the URL
  const router = useRouter();
  const { return_to: returnTo, flow: flowId } = router.query;

  const handleFlowError = useHandleFlowError(router, "recovery", setFlow);

  React.useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return;
    }

    async function fetchFlow() {
      // If ?flow=.. was in the URL, we fetch it
      if (flowId) {
        try {
          const { data } = await ory.getSelfServiceRecoveryFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          await handleFlowError(error);
        }

        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await ory.initializeSelfServiceRecoveryFlowForBrowsers();
        setFlow(data);
      } catch (error) {
        await handleFlowError(error);
      }
    }

    fetchFlow();
  }, [flowId, router, router.isReady, returnTo, flow, handleFlowError]);

  const onSubmit = async (values: SubmitSelfServiceRecoveryFlowBody) => {
    // On submission, add the flow ID to the URL but do not navigate. This prevents the user losing
    // his data when she/he reloads the page.
    try {
      await router.push(`/recovery?flow=${flow?.id}`, undefined, { shallow: true });
      const { data } = await ory.submitSelfServiceRecoveryFlow(String(flow?.id), undefined, values);

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

        throw error;
      }
    }
  };

  return (
    <Center height="-webkit-fill-available" flexDirection="column" px={4} justifyContent="center" bg={bg}>
      <NextSeo title={t("meta-title")} description={t("meta-description")} />
      <Logo />
      <Heading size="lg" mt={4} mb={4}>
        {t("heading")}
      </Heading>
      <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
        <FlowForm flow={flow} onSubmit={onSubmit} />
      </Card>
      <Center fontSize="sm" mt={4}>
        <Trans
          i18nKey="recovery:go-back"
          components={{
            link: <Link variant="cta" href="/login" />,
          }}
        />
      </Center>
    </Center>
  );
}
