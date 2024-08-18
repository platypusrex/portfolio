import React from 'react';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Layout } from 'layout/Layout/Layout';
import '../styles/global.css';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  authors: { name: 'Frank Cooke' },
  keywords: [
    'Frank Cooke',
    'portfolio',
    'resume',
    'react',
    'typescript',
    'next.js',
    'contentful',
    'tailwind',
    'graphQL',
  ],
  robots: {
    index: true,
    follow: true,
  },
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
