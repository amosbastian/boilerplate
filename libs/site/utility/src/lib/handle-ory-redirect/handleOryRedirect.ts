// const URL = `${process.env.NEXT_PUBLIC_ORY_KRATOS_PUBLIC}/sessions/whoami`;
const URL = `http://localhost:3000/api/.ory/sessions/whoami`;

export const handleOryRedirect = async (requireActiveSession: boolean, destination: string, cookie?: string) => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: cookie ? { cookie: cookie } : undefined,
    });

    const { error, ...session } = await response.json();

    const hasActiveSession = session?.active && Boolean(session.id);

    if (requireActiveSession && hasActiveSession) {
      return {
        props: {},
      };
    }

    if (requireActiveSession && !hasActiveSession) {
      return {
        redirect: {
          destination: destination,
          permanent: false,
        },
      };
    }

    if (error || !hasActiveSession) {
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
        return;
    }

    // Something else happened!
    return Promise.reject(error);
  }
};
