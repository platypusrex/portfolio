import { Box, Button, Flex, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from 'components/PageHeader';
import { TextField } from 'components/TextField';
import { TextArea } from 'components/TextArea';
import { SocialLink, SocialLinkProps } from 'components/SocialLink';
import { Spinner } from 'components/Spinner';
import { initializeApollo } from 'lib/apollo';
import { usePage } from 'hooks/usePage';
import { useEmailForm } from 'hooks/useEmailForm';
import { Page } from 'gql';
import { PageQuery, PageQueryVariables } from 'types/generated';

const CONTACT_PAGE_ID = '6fWZPk4ERnFuZc3yMFqrSY';

const ContactPage = () => {
  const { pageHeader, hero, contactInfo, socialLinksCollection } = usePage(CONTACT_PAGE_ID);
  const { values, errors, isValid, isSubmitting, onChange, handleSubmit } = useEmailForm();

  const LeftColumn = (
    <GridItem colSpan={{ base: 5, lg: 2 }}>
      <Flex
        flexDirection={{ base: 'row', lg: 'column' }}
        justifyContent={{ base: 'space-between', lg: 'initial' }}
        background="hsla(0,0% ,100%, .95);"
        p={2}
      >
        {contactInfo && (
          <Box>
            <Heading size="sm" mb={1}>
              Contact Info:
            </Heading>
            <Text>{contactInfo.email}</Text>
            <Text>{contactInfo.phone}</Text>
            <Text>
              {contactInfo.city}, {contactInfo.state}
            </Text>
          </Box>
        )}
        <Flex sx={{ '& a': { marginRight: 3 } }} mt={2}>
          {socialLinksCollection?.items.map((socialLink, i) => (
            <SocialLink key={i} {...(socialLink as SocialLinkProps)} />
          ))}
        </Flex>
      </Flex>
    </GridItem>
  );

  const RightColumn = (
    <GridItem colSpan={{ base: 5, lg: 3 }}>
      <VStack as="form" spacing={4} align="stretch" onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          placeholder="Your name*"
          size="lg"
          isInvalid={errors.name}
          error={errors.name}
          value={values.name}
          onChange={onChange}
        />
        <TextField
          id="email"
          name="email"
          placeholder="Your email*"
          size="lg"
          isInvalid={errors.email}
          error={errors.email}
          value={values.email}
          onChange={onChange}
        />
        <TextArea
          id="message"
          name="message"
          placeholder="Your message*"
          size="lg"
          rows={12}
          isInvalid={errors.message}
          error={errors.message}
          value={values.message}
          onChange={onChange}
        />
        <Button
          variant="form"
          type="submit"
          size="lg"
          spinner={<Spinner />}
          isLoading={isSubmitting}
          loadingText="Sending email..."
          disabled={!isValid}
          alignSelf={{ base: 'auto', lg: 'flex-end' }}
          w={{ base: 'auto', lg: '240px' }}
        >
          Submit
        </Button>
      </VStack>
    </GridItem>
  );

  return (
    <>
      <PageHeader {...pageHeader} />
      <Box
        background={`url(${hero?.url}) no-repeat center / cover fixed`}
        padding={{ base: 3, md: 6 }}
        marginX={{ base: 3, md: 10 }}
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {LeftColumn}
          {RightColumn}
        </Grid>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<PageQuery, PageQueryVariables>({
    query: Page,
    variables: { id: CONTACT_PAGE_ID },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      navLinks: data.page?.navLinksCollection,
      revalidate: 1,
    },
  };
};

export default ContactPage;
