import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  TypePolicies,
} from '@apollo/client';
import introspection from '../../../introspectionResult.json';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
      headers: { Authorization: `Bearer ${accessToken}` },
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache({ typePolicies: introspection.possibleTypes as TypePolicies }),
  });
};
