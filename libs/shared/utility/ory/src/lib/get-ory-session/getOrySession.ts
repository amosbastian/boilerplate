import fetch from "node-fetch";

// const URL = `${process.env.NEXT_PUBLIC_ORY_KRATOS_PUBLIC}/sessions/whoami`;
const URL = `http://localhost:3000/api/.ory/sessions/whoami`;

export const getOrySession = async (cookie?: string) => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: cookie ? { cookie: cookie } : undefined,
    });

    const { error, ...session } = await response.json();

    return { error, session };
  } catch (error) {
    return Promise.reject(error);
  }
};
