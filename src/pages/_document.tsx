import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico?v=1.0" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Cardo" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet" />
          <script
            src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@1.0.0/dist/es5/seamless.auto-polyfill.min.js"
            data-seamless
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
