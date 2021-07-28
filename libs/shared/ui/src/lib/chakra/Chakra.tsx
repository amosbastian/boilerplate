import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

interface ChakraProps {
  children: React.ReactNode;
  cookies: string;
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>;
};

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
