import { theme } from "@boilerplate/shared/theme";
import type { Page } from "@boilerplate/shared/types";
import { Chakra, Head } from "@boilerplate/shared/ui";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import React from "react";

type CustomAppProps = AppProps & {
  Component: Page<unknown>;
};

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Chakra cookies={pageProps.cookies}>
      <ChakraProvider theme={theme} resetCSS>
        <Head />
        <div className="app">
          <main>{getLayout(<Component {...pageProps} />)}</main>
        </div>
      </ChakraProvider>
    </Chakra>
  );
}

export default CustomApp;
