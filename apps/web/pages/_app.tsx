import { Footer, Header } from "@boilerplate/shared/ui";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <div className="app">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
