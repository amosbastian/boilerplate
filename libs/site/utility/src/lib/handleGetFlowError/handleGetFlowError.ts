// Source: https://github.com/ory/kratos-selfservice-ui-react-nextjs
import { theme } from "@boilerplate/shared/theme";
import { createStandaloneToast } from "@chakra-ui/react";
import type { AxiosError } from "axios";
import { NextRouter } from "next/router";
import * as React from "react";

export function handleGetFlowError<T>(
  router: NextRouter,
  flowType: "login" | "registration" | "settings" | "recovery" | "verification",
  setFlow: React.Dispatch<React.SetStateAction<T | undefined>>,
) {
  const toast = createStandaloneToast(theme);

  return async (error: AxiosError) => {
    switch (error.response?.data.error?.id) {
      case "session_aal2_required":
        // 2FA is enabled and enforced, but user did not perform 2fa yet!
        window.location.href = error.response?.data.redirect_browser_to;
        return;
      case "session_already_available":
        // User is already signed in, let's redirect them home!
        await router.push("/");
        return;
      case "session_refresh_required":
        // We need to re-authenticate to perform this action
        window.location.href = error.response?.data.redirect_browser_to;
        return;
      case "self_service_flow_return_to_forbidden":
        // The flow expired, let's request a new one.
        toast({ title: "The return_to address is not allowed.", status: "error" });
        setFlow(undefined);
        await router.push("/" + flowType);
        return;
      case "self_service_flow_expired":
        // The flow expired, let's request a new one.
        toast({ title: "Your interaction expired, please fill out the form again.", status: "error" });
        setFlow(undefined);
        await router.push("/" + flowType);
        return;
      case "security_csrf_violation":
        // A CSRF violation occurred. Best to just refresh the flow!
        toast({ title: "A security violation was detected, please fill out the form again.", status: "error" });
        setFlow(undefined);
        await router.push("/" + flowType);
        return;
      case "security_identity_mismatch":
        // The requested item was intended for someone else. Let's request a new flow...
        setFlow(undefined);
        await router.push("/" + flowType);
        return;
      case "browser_location_change_required":
        // Ory Kratos asked us to point the user to this URL.
        window.location.href = error.response.data.redirect_browser_to;
        return;
    }

    switch (error.response?.status) {
      case 410:
        // The flow expired, let's request a new one.
        setFlow(undefined);
        await router.push("/" + flowType);
        return;
    }

    // We are not able to handle the error? Return it.
    return Promise.reject(error);
  };
}
