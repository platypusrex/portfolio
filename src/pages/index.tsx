import { useRef, Fragment } from 'react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { ScrollButton } from 'components/ScrollButton';
import { AnimatedText } from 'components/AnimatedText';
import { Arrow } from 'components/Arrow';
import { Hero } from 'components/Hero';
import { PageHeader } from 'components/PageHeader';
import { LinkButton } from 'components/LinkButton';
import { initializeApollo } from 'lib/apollo';
import { usePage } from 'hooks/usePage';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { pageTitle } from 'constants/pageTitle';
import { Page } from 'gql';
import { PageQuery, PageQueryVariables } from 'types/generated';
import me_desktop from 'public/images/me_mountain.jpeg';
import me_mobile from 'public/images/me.png';

const ABOUT_PAGE_ID = '6iA2yPjBR8dYsO6YFwJuu3';

const contentOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Text fontSize="18" marginBlockEnd="5">
        {children}
      </Text>
    ),
  },
};

const IndexPage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const aboutSectionRef = useRef(null);
  const { content, pageHeader } = usePage(ABOUT_PAGE_ID);

  const Content = [
    <Fragment key="col-1">
      {content?.json && (
        <GridItem colSpan={{ base: 5, lg: 4 }}>
          {documentToReactComponents(content.json, contentOptions)}
        </GridItem>
      )}
    </Fragment>,
    <GridItem
      key="col-2"
      display="flex"
      colSpan={{ base: 5, lg: 1 }}
      flexDir={{ base: 'row', lg: 'column' }}
      mb={{ base: 6, lg: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <LinkButton
        sx={{ marginBlock: { base: 0, lg: 6 }, marginInlineEnd: { base: 6, lg: 0 } }}
        title="Resume"
        subTitle="view resume"
        icon="file"
        href="/resume"
      />
      <LinkButton
        title="Github"
        subTitle="view profile"
        icon="github"
        href="https://github.com/platypusrex"
        external
      />
    </GridItem>,
  ];

  return (
    <>
      <ScrollButton scrollElementRef={aboutSectionRef}>
        <AnimatedText
          text="Hello world!"
          transform="rotate(-20deg)"
          m="40px 25px 0"
          lineHeight="25px"
          color="white"
        />
        <Arrow />
      </ScrollButton>
      <Hero alt="about-hero-img" src={{ base: me_mobile, md: me_desktop }} />
      <Box minH="100vh" ref={aboutSectionRef}>
        <PageHeader {...pageHeader} />
        <Box padding={{ base: '0 20px', md: '0 80px', lg: '0 50px 0 150px' }}>
          <Grid templateColumns="repeat(5, 1fr)">{isMobile ? Content.reverse() : Content}</Grid>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<PageQuery, PageQueryVariables>({
    query: Page,
    variables: { id: ABOUT_PAGE_ID },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      navLinks: data.page?.navLinksCollection,
      title: pageTitle.about,
      revalidate: 1,
    },
  };
};

export default IndexPage;
