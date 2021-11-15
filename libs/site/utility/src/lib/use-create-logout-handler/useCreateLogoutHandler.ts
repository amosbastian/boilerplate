// Source: https://github.com/ory/kratos-selfservice-ui-react-nextjs
import { oryBrowserClient } from "../ory-browser-client/oryBrowserClient";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";
import * as React from "react";

// Returns a function which will log the user out
export function useCreateLogoutHandler(dependencies?: React.DependencyList) {
  const [loading, setLoading] = React.useState(false);
  const [logoutToken, setLogoutToken] = React.useState<string>("");
  const router = useRouter();

  React.useEffect(() => {
    const createSelfServiceLogoutFlowUrlForBrowsers = async () => {
      try {
        const { data } = await oryBrowserClient.createSelfServiceLogoutFlowUrlForBrowsers();
        setLogoutToken(data.logout_token);
      } catch (error) {
        switch ((error as AxiosError).response?.status) {
          // User is not logged in
          case 401:
            return;
        }

        return Promise.reject(error);
      }
    };

    createSelfServiceLogoutFlowUrlForBrowsers();
  }, dependencies);

  const handleLogout = async () => {
    if (logoutToken) {
      setLoading(true);
      await oryBrowserClient.submitSelfServiceLogoutFlow(logoutToken);
      setLoading(false);

      router.push("/login");
      router.reload();
    }
  };

  return { handleLogout, loading };
}
