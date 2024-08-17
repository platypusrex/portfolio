import { Montserrat } from 'next/font/google';
import React from 'react';
import { Layout } from 'layout/Layout/Layout';
import '../styles/global.css';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
