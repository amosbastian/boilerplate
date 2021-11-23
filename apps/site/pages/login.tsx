import { Card, Link, Logo } from "@boilerplate/shared/ui";
import { FlowForm } from "@boilerplate/site/ui";
import {
  handleGetFlowError,
  handleOryRedirect,
  oryBrowserClient,
  useCreateLogoutHandler,
} from "@boilerplate/site/utility";
import { Box, Button, Center, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { SelfServiceLoginFlow, SubmitSelfServiceLoginFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(false, "/home", context.req.headers.cookie);
};

export default function Login() {
  const { t } = useTranslation("login");
  const bg = useColorModeValue("gray.50", "gray.900");
  const [flow, setFlow] = React.useState<SelfServiceLoginFlow>();
  const [flowLoading, setFlowLoading] = React.useState<boolean>(false);

  // Get ?flow=... from the URL
  const router = useRouter();
  const {
    return_to: returnTo,
    flow: flowId,
    // Refresh means we want to refresh the session. This is needed, for example, when we want to update the password
    // of a user.
    refresh,
    // AAL = Authorization Assurance Level. This implies that we want to upgrade the AAL, meaning that we want
    // to perform two-factor authentication/verification.
    aal,
  } = router.query;

  const { handleLogout, loading: signingOut } = useCreateLogoutHandler([aal, refresh]);
  const handleFlowError = handleGetFlowError(router, "login", setFlow);

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
          const { data } = await oryBrowserClient.getSelfServiceLoginFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          await handleFlowError(error);
        }

        setFlowLoading(false);
        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await oryBrowserClient.initializeSelfServiceLoginFlowForBrowsers(
          Boolean(refresh),
          aal ? String(aal) : undefined,
          returnTo ? String(returnTo) : undefined,
        );

        setFlow(data);
      } catch (error) {
        await handleFlowError(error);
      }

      setFlowLoading(false);
    }

    fetchFlow();
  }, [flowId, router, router.isReady, aal, refresh, returnTo, flow, handleFlowError]);

  const onSubmit = async (values: SubmitSelfServiceLoginFlowBody) => {
    // On submission, add the flow ID to the URL but do not navigate. This prevents the user losing
    // his data when she/he reloads the page.
    try {
      await router.push(`/login?flow=${flow?.id}`, undefined, { shallow: true });
      await oryBrowserClient.submitSelfServiceLoginFlow(String(flow?.id), undefined, values);

      if (flow?.return_to) {
        window.location.href = flow?.return_to;
        return;
      }

      // We logged in successfully! Let's bring the user home.
      await router.push("/home");
    } catch (error) {
      try {
        await handleFlowError(error);
      } catch (error) {
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
      <Heading as="h1" size="lg" mt={4} mb={4}>
        {t("heading")}
      </Heading>
      <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
        <FlowForm flow={flow} onSubmit={onSubmit} flowLoading={flowLoading} />
      </Card>
      <VStack spacing={4} fontSize="sm" mt={4}>
        {aal || refresh ? (
          <Button isLoading={signingOut} variant="ghost" onClick={handleLogout}>
            {t("common:sign-out")}
          </Button>
        ) : (
          <Box>
            <Trans
              i18nKey="login:create-account"
              components={{
                link: <Link data-testid="registration" variant="cta" href="/registration" />,
              }}
            />
          </Box>
        )}
      </VStack>
    </Center>
  );
}
