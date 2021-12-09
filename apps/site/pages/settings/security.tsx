import { Card, CardHeader, CardProps, Container } from "@boilerplate/shared/ui";
import { FlowForm, FlowMessages, FlowMethods, getLayout, PageHeading, SettingsSection } from "@boilerplate/site/ui";
import { handleGetFlowError, handleOryRedirect, oryBrowserClient } from "@boilerplate/site/utility";
import { Text } from "@chakra-ui/react";
import { SelfServiceSettingsFlow, SubmitSelfServiceSettingsFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

interface SettingsCardProps extends CardProps {
  flow?: SelfServiceSettingsFlow;
  only?: FlowMethods;
}

function SettingsCard({ flow, only, children, ...rest }: SettingsCardProps) {
  if (!flow) {
    return null;
  }

  const nodes = only ? flow.ui.nodes.filter(({ group }) => group === only) : flow.ui.nodes;

  if (nodes.length === 0) {
    return null;
  }

  return <Card {...rest}>{children}</Card>;
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return await handleOryRedirect(true, "/login", context.req.headers.cookie);
};

export default function Security() {
  const { t } = useTranslation("settings");
  const [flow, setFlow] = React.useState<SelfServiceSettingsFlow>();
  const [flowLoading, setFlowLoading] = React.useState<boolean>(false);

  // Get ?flow=... from the URL
  const router = useRouter();
  const { return_to: returnTo, flow: flowId } = router.query;

  const handleFlowError = handleGetFlowError(router, "settings", setFlow);

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
          const { data } = await oryBrowserClient.getSelfServiceSettingsFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          await handleFlowError(error);
        }

        setFlowLoading(false);
        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await oryBrowserClient.initializeSelfServiceSettingsFlowForBrowsers(
          returnTo ? String(returnTo) : undefined,
        );
        setFlow(data);
      } catch (error) {
        await handleFlowError(error);
      }

      setFlowLoading(false);
    }

    fetchFlow();
  }, [flowId, router, router.isReady, returnTo, flow, handleFlowError]);

  const onSubmit = async (values: SubmitSelfServiceSettingsFlowBody) => {
    // On submission, add the flow ID to the URL but do not navigate. This prevents the user losing
    // his data when she/he reloads the page.
    try {
      await router.push(`/settings/security?flow=${flow?.id}`, undefined, { shallow: true });
      const { data } = await oryBrowserClient.submitSelfServiceSettingsFlow(String(flow?.id), undefined, values);

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
    <>
      <NextSeo title={t("meta-title")} />
      <PageHeading heading={t("page-heading")} />
      <Container pb={{ base: 4, md: 10 }}>
        <SettingsSection>
          <SettingsCard data-testid="ory-profile-settings" only="profile" flow={flow}>
            <CardHeader mb={6} title={t("ory-profile-settings-title")} />
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm hideGlobalMessages onSubmit={onSubmit} only="profile" flow={flow} flowLoading={flowLoading} />
          </SettingsCard>
          <SettingsCard data-testid="ory-password-settings" only="password" flow={flow}>
            <CardHeader mb={6} title={t("ory-password-settings-title")} />
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm hideGlobalMessages onSubmit={onSubmit} only="password" flow={flow} flowLoading={flowLoading} />
          </SettingsCard>
          <SettingsCard data-testid="ory-oidc-settings" only="oidc" flow={flow}>
            <CardHeader mb={6} title={t("ory-oidc-settings-title")} />
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm hideGlobalMessages onSubmit={onSubmit} only="oidc" flow={flow} flowLoading={flowLoading} />
          </SettingsCard>
          <SettingsCard data-testid="ory-lookup-secret-settings" only="lookup_secret" flow={flow}>
            <CardHeader
              mb={6}
              title={t("ory-lookup-secret-settings-title")}
              subtitle={t("ory-lookup-secret-settings-subtitle")}
            />
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm
              hideGlobalMessages
              onSubmit={onSubmit}
              only="lookup_secret"
              flow={flow}
              flowLoading={flowLoading}
            />
          </SettingsCard>
          <SettingsCard data-testid="ory-totp-settings" only="totp" flow={flow}>
            <CardHeader mb={6} title={t("ory-totp-settings-title")} />
            <Text mb={4} mx={6}>
              {t("ory-totp-settings-description")}
            </Text>
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm hideGlobalMessages onSubmit={onSubmit} only="totp" flow={flow} flowLoading={flowLoading} />
          </SettingsCard>
          <SettingsCard data-testid="ory-webauthn-settings" only="webauthn" flow={flow} pb={6}>
            <CardHeader
              mb={6}
              title={t("ory-webauthn-settings-title")}
              subtitle={t("ory-webauthn-settings-subtitle")}
            />
            <FlowMessages mx={6} messages={flow?.ui.messages} mb={4} />
            <FlowForm hideGlobalMessages onSubmit={onSubmit} only="webauthn" flow={flow} flowLoading={flowLoading} />
          </SettingsCard>
        </SettingsSection>
      </Container>
    </>
  );
}

Security.getLayout = getLayout;
