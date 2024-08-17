import { gqlClient } from 'lib/urql/server';
import { PageQuery, PageQueryVariables } from 'types/generated';
import { Page } from 'gql';

export const getPage = async (id: string) => {
  const { data, ...rest } = await gqlClient().query<PageQuery, PageQueryVariables>(Page, {
    id,
  });

  return {
    pageHeader: data?.page?.pageHeader || null,
    content: data?.page?.content || null,
    hero: data?.page?.hero || null,
    heroMobile: data?.page?.heroMobile || null,
    contactInfo: data?.page?.contactInfo || null,
    socialLinksCollection: data?.page?.socialLinksCollection || null,
    resumeSectionsCollection: data?.page?.resumeSectionsCollection || null,
    ...rest,
  };
};
