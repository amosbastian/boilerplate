// Source: https://github.com/ory/kratos-selfservice-ui-react-nextjs
import { ory } from "@boilerplate/shared/utility/ory";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";
import * as React from "react";

// Returns a function which will log the user out
export function createLogoutHandler(dependencies?: React.DependencyList) {
  const [logoutToken, setLogoutToken] = React.useState<string>("");
  const router = useRouter();

  React.useEffect(() => {
    ory
      .createSelfServiceLogoutFlowUrlForBrowsers()
      .then(({ data }) => {
        setLogoutToken(data.logout_token);
      })
      .catch((error: AxiosError) => {
        switch (error.response?.status) {
          case 401:
            // do nothing, the user is not logged in
            return;
        }

        // Something else happened!
        return Promise.reject(error);
      });
  }, dependencies);

  return () => {
    if (logoutToken) {
      ory
        .submitSelfServiceLogoutFlow(logoutToken)
        .then(() => router.push("/login"))
        .then(() => router.reload());
    }
  };
}
