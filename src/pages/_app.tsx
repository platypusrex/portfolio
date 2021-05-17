import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { LayoutProvider } from 'lib/layoutContext';
import { Layout } from 'layout/Layout';
import { useApollo } from 'lib/apollo';
import { theme } from 'styled/theme';

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <LayoutProvider>
          <Layout navLinks={pageProps.navLinks}>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
