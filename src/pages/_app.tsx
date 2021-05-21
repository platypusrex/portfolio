import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { LayoutProvider } from 'lib/layoutContext';
import { Layout } from 'layout/Layout';
import { useApollo } from 'lib/apollo';
import { theme } from 'styled/theme';
import { SEO } from 'components/SEO';

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
