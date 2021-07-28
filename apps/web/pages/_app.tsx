import { theme } from "@boilerplate/shared/theme";
import type { Page } from "@boilerplate/shared/types";
import { Chakra } from "@boilerplate/shared/ui";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

type CustomAppProps = AppProps & {
  Component: Page<unknown>;
};

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Chakra cookies={pageProps.cookies}>
      <ChakraProvider theme={theme} resetCSS>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <div className="app">
          <main>{getLayout(<Component {...pageProps} />)}</main>
        </div>
      </ChakraProvider>
    </Chakra>
  );
}

export default CustomApp;
