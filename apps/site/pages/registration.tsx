import { Card, Link, Logo } from "@boilerplate/shared/ui";
import { ory } from "@boilerplate/shared/utility/ory";
import { FlowForm } from "@boilerplate/site/ui";
import { fetcher, handleOryRedirect, useHandleFlowError } from "@boilerplate/site/utility";
import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { SelfServiceRegistrationFlow, SubmitSelfServiceRegistrationFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(false, "/login", context.req.headers.cookie);
};

export default function Signin() {
  const { t } = useTranslation("registration");
  const bg = useColorModeValue("gray.50", "gray.900");

  const router = useRouter();

  // The "flow" represents a registration process and contains
  // information about the form we need to render (e.g. username + password)
  const [flow, setFlow] = React.useState<SelfServiceRegistrationFlow>();

  // Get ?flow=... from the URL
  const { flow: flowId, return_to: returnTo } = router.query;

  const handleFlowError = useHandleFlowError(router, "registration", setFlow);

  // In this effect we either initiate a new registration flow, or we fetch an existing registration flow.
  React.useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return;
    }

    async function fetchFlow() {
      // If ?flow=.. was in the URL, we fetch it
      if (flowId) {
        try {
          const { data } = await ory.getSelfServiceRegistrationFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          handleFlowError(error);
        }
        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await ory.initializeSelfServiceRegistrationFlowForBrowsers(
          returnTo ? String(returnTo) : undefined,
        );
        setFlow(data);
      } catch (error) {
        handleFlowError(error);
      }
    }

    fetchFlow();
  }, [flowId, router, router.isReady, returnTo, flow, handleFlowError]);

  const onSubmit = async (values: SubmitSelfServiceRegistrationFlowBody) => {
    try {
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      await router.push(`/registration?flow=${flow?.id}`, undefined, { shallow: true });
      const { data } = await ory.submitSelfServiceRegistrationFlow(String(flow?.id), values);
      // If we ended up here, it means we are successfully signed up!
      //

      await fetcher({
        url: "http://localhost:3333/api/create-user",
        method: "POST",
        body: { identity: data.identity },
      });

      // For now however we just want to redirect home!
      return router.push(flow?.return_to || "/home");
    } catch (error) {
      try {
        await handleFlowError(error);
      } catch (error) {
        // If the previous handler did not catch the error it's most likely a form validation error
        if (error.response?.status === 400) {
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
      <Heading size="lg" mt={4} mb={4}>
        {t("heading")}
      </Heading>
      <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
        <FlowForm flow={flow} onSubmit={onSubmit} />
      </Card>
      <Center fontSize="sm" mt={4}>
        <Box>
          <Trans
            i18nKey="registration:sign-in-to-account"
            components={{
              link: <Link variant="cta" href="/login" />,
            }}
          />
        </Box>
      </Center>
    </Center>
  );
}
