import { Box } from '@chakra-ui/react';
import { PageHeader } from 'components/PageHeader';
import { IconButton } from 'components/IconButton';
import { Resume } from 'components/Resume';
import { initializeApollo } from 'lib/apollo';
import { usePage } from 'hooks/usePage';
import { useResumePdf } from 'hooks/useResumePdf';
import { pageTitle } from 'constants/pageTitle';
import { Page } from 'gql';
import { PageQuery, PageQueryVariables } from 'types/generated';

const RESUME_PAGE_ID = 'FJdbfsztIScwFLQDTstZ4';

const ResumePage = () => {
  const { pageHeader, resumeSectionsCollection, contactInfo } = usePage(RESUME_PAGE_ID);
  const { handlePrintPdf, handleDownloadPdf } = useResumePdf(resumeSectionsCollection, contactInfo);

  const extra = (
    <>
      <IconButton icon="printer" onClick={handlePrintPdf} />
      <IconButton icon="download" onClick={handleDownloadPdf} />
    </>
  );

  return (
    <>
      <PageHeader {...pageHeader} extra={extra} />
      {resumeSectionsCollection?.items && (
        <Box padding={{ base: '0 20px', md: '0 40px', lg: '0 80px', xl: '0 100px' }}>
          {resumeSectionsCollection.items.map(
            (resumeSection) =>
              resumeSection && <Resume key={resumeSection.name} resumeSection={resumeSection} />
          )}
        </Box>
      )}
    </>
  );
};

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
      title: pageTitle.resume,
      revalidate: 1,
    },
  };
};

export default ResumePage;
