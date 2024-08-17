import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

const makeClient = () => {
  return createClient({
    url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
};

export const { getClient: gqlClient } = registerUrql(makeClient);
