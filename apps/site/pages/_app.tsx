import { theme } from "@boilerplate/shared/theme";
import type { Page } from "@boilerplate/shared/types";
import { Chakra, Head } from "@boilerplate/shared/ui";
import { setGraphqlEndpoint } from "@boilerplate/shared/utility/graphql";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

setGraphqlEndpoint(process.env.API_ENDPOINT ?? "http://localhost:3333/graphql");

type CustomAppProps = AppProps & {
  Component: Page<unknown>;
};

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Chakra cookies={pageProps.cookies}>
          <ChakraProvider theme={theme} resetCSS>
            <Head />
            {getLayout(<Component {...pageProps} />)}
          </ChakraProvider>
        </Chakra>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
