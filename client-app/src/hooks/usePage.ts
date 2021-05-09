import { QueryResult } from '@apollo/client';
import { PageFieldsFragment } from 'types/generated';
import { usePageQuery } from 'hooks/generated';

export type UsePage = Omit<QueryResult, 'data'> & Omit<PageFieldsFragment, 'navLinksCollection'>;

export const usePage = (pageId: string): UsePage => {
  const { data, ...rest } = usePageQuery({
    variables: { id: pageId },
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
