import React from 'react';
import Head from 'next/head';

export interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta key="meta-tag__charset" charSet="utf-8" />
    <meta key="meta-tag__ie" httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
