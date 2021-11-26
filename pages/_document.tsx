import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <ColorModeScript initialColorMode="light" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
