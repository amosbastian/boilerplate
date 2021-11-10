import type { GetServerSidePropsContext } from "next";

// const URL = `${process.env.NEXT_PUBLIC_ORY_KRATOS_PUBLIC}/sessions/whoami`;
const URL = `http://localhost:3000/api/.ory/sessions/whoami`;

export const getOrySession = async (req: GetServerSidePropsContext["req"]) => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: req ? { cookie: req?.headers.cookie as string } : undefined,
    });

    const { error, ...session } = await response.json();

    if (error) {
      return {
        data: undefined,
        error,
      };
    }

    return {
      error: null,
      data: session,
    };
  } catch (error) {
    return {
      data: undefined,
      error,
    };
  }
};
