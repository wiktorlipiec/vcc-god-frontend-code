import "../../public/css/styles.css";
import React from "react";
import type { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { Layout } from "../components/Layout";

function VolvoApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemePicker>
      </StyleProvider>,
    </React.StrictMode>
  );
}


export default VolvoApp;
