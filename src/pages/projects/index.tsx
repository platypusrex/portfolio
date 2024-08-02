import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { pageTitle } from 'constants/pageTitle';
import { initializeApollo } from 'lib/apollo';
import { PageQuery, PageQueryVariables } from 'types/generated';
import { Page } from 'gql';

const RESUME_PAGE_ID = 'FJdbfsztIScwFLQDTstZ4';

const Projects: React.FC = () => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <Heading fontSize="4xl">Coming soon...</Heading>
  </Flex>
);

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<PageQuery, PageQueryVariables>({
    query: Page,
    variables: { id: RESUME_PAGE_ID },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      navLinks: data.page?.navLinksCollection,
      title: pageTitle.projects,
      revalidate: 1,
    },
  };
};

export default Projects;
