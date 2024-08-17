import { useMemo } from 'react';
import { cacheExchange, createClient, fetchExchange, ssrExchange } from '@urql/core';

export const useGQLClient = () =>
  useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: 'https://trygql.formidable.dev/graphql/web-collections',
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);
