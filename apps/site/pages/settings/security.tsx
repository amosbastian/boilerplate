import { Card, CardContent, CardHeader, Container } from "@boilerplate/shared/ui";
import { ory } from "@boilerplate/shared/utility/ory";
import { FlowForm, FlowMessages, FlowMethods, getLayout, PageHeading, SettingsSection } from "@boilerplate/site/ui";
import { handleOryRedirect, handleGetFlowError } from "@boilerplate/site/utility";
import { Text } from "@chakra-ui/react";
import { SelfServiceSettingsFlow, SubmitSelfServiceSettingsFlowBody } from "@ory/kratos-client";
import type { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  flow?: SelfServiceSettingsFlow;
  only?: FlowMethods;
}

function SettingsCard({ flow, only, children }: Props & { children: React.ReactNode }) {
  if (!flow) {
    return null;
  }

  const nodes = only ? flow.ui.nodes.filter(({ group }) => group === only) : flow.ui.nodes;

  if (nodes.length === 0) {
    return null;
  }

  return <Card>{children}</Card>;
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
          const { data } = await ory.getSelfServiceSettingsFlow(String(flowId));
          setFlow(data);
        } catch (error) {
          await handleFlowError(error);
        }

        setFlowLoading(false);
        return;
      }

      // Otherwise we initialise it
      try {
        const { data } = await ory.initializeSelfServiceSettingsFlowForBrowsers(
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
      const { data } = await ory.submitSelfServiceSettingsFlow(String(flow?.id), undefined, values);

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
          <SettingsCard only="profile" flow={flow}>
            <CardHeader title={t("Profile settings")} />
            <CardContent>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm hideGlobalMessages onSubmit={onSubmit} only="profile" flow={flow} flowLoading={flowLoading} />
            </CardContent>
          </SettingsCard>
          <SettingsCard only="password" flow={flow}>
            <CardHeader title={t("Change password")} />
            <CardContent>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm hideGlobalMessages onSubmit={onSubmit} only="password" flow={flow} flowLoading={flowLoading} />
            </CardContent>
          </SettingsCard>
          <SettingsCard only="oidc" flow={flow}>
            <CardHeader title={t("Manage social sign in")} />
            <CardContent>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm hideGlobalMessages onSubmit={onSubmit} only="oidc" flow={flow} flowLoading={flowLoading} />
            </CardContent>
          </SettingsCard>
          <SettingsCard only="lookup_secret" flow={flow}>
            <CardHeader
              title={t("Manage 2FA Backup Recovery Codes")}
              subtitle={t(
                "Recovery codes can be used in panic situations where you have lost access to your 2FA device.",
              )}
            />
            <CardContent>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm
                hideGlobalMessages
                onSubmit={onSubmit}
                only="lookup_secret"
                flow={flow}
                flowLoading={flowLoading}
              />
            </CardContent>
          </SettingsCard>
          <SettingsCard only="totp" flow={flow}>
            <CardHeader title={t("Manage 2FA TOTP Authenticator App")} />
            <CardContent>
              <Text>
                Add a TOTP Authenticator App to your account to improve your account security. Popular Authenticator
                Apps are{" "}
                <a href="https://www.lastpass.com" rel="noreferrer" target="_blank">
                  LastPass
                </a>{" "}
                and Google Authenticator (
                <a
                  href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                  target="_blank"
                  rel="noreferrer"
                >
                  iOS
                </a>
                ,{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  Android
                </a>
                ).
              </Text>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm hideGlobalMessages onSubmit={onSubmit} only="totp" flow={flow} flowLoading={flowLoading} />
            </CardContent>
          </SettingsCard>
          <SettingsCard only="webauthn" flow={flow}>
            <CardHeader
              title={t("Manage Hardware Tokens and Biometrics")}
              subtitle={t(
                "Use Hardware Tokens (e.g. YubiKey) or Biometrics (e.g. FaceID, TouchID) to enhance your account security.",
              )}
            />
            <CardContent>
              <FlowMessages messages={flow?.ui.messages} mb={4} />
              <FlowForm hideGlobalMessages onSubmit={onSubmit} only="webauthn" flow={flow} flowLoading={flowLoading} />
            </CardContent>
          </SettingsCard>
        </SettingsSection>
      </Container>
    </>
  );
}

Security.getLayout = getLayout;
