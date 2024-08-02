import React from 'react';
import { AppProps as NextAppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { LayoutProvider } from 'lib/layoutContext';
import { Layout } from 'layout/Layout';
import { SEO } from 'components/SEO';
import { useApollo } from 'lib/apollo';
import { theme } from 'styled/theme';
import { PageFieldsFragment } from 'types/generated';

type AppProps = NextAppProps<{
  initialApolloState: NormalizedCacheObject;
  navLinks?: PageFieldsFragment['navLinksCollection'];
  title: string;
}>;

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { initialApolloState, navLinks, title } = pageProps;
  const apolloClient = useApollo(initialApolloState);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <LayoutProvider>
          <Layout navLinks={navLinks}>
            <SEO title={title} />
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
