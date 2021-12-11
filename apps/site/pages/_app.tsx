import { configuration } from "@boilerplate/shared/configuration";
import { theme } from "@boilerplate/shared/theme";
import type { Page } from "@boilerplate/shared/types";
import { Chakra, Head } from "@boilerplate/shared/ui";
import { setGraphqlEndpoint } from "@boilerplate/shared/utility/graphql";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

setGraphqlEndpoint(`${configuration.BASE_URL_API}/graphql`);

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
            <NextNprogress
              color={theme.colors.primary[500]}
              startPosition={0.3}
              stopDelayMs={200}
              height={2}
              showOnShallow={true}
              options={{ showSpinner: false }}
            />
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools initialIsOpen={false} />
          </ChakraProvider>
        </Chakra>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
