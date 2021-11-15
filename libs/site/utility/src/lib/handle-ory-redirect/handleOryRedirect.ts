import { oryBrowserClient } from "../ory-browser-client/oryBrowserClient";

export const handleOryRedirect = async (requireActiveSession: boolean, destination: string, cookie?: string) => {
  try {
    await oryBrowserClient.toSession(undefined, cookie);

    if (requireActiveSession) {
      return {
        props: {},
      };
    }

    return {
      redirect: {
        destination: destination,
        permanent: false,
      },
    };
  } catch (error: any) {
    switch (error.response?.status) {
      case 403:
        // This is a legacy error code thrown. See code 422 for more details.
        break;
      case 422:
        // This status code is returned when we are trying to
        // validate a session which has not yet completed
        // its second factor
        return {
          redirect: {
            destination: "/login?aal=aal2",
            permanent: false,
          },
        };
      case 401:
        // User is not logged in
        if (requireActiveSession) {
          return {
            redirect: {
              destination: destination,
              permanent: false,
            },
          };
        }

        return {
          props: {},
        };
    }

    // Something else happened!
    return Promise.reject(error);
  }
};
