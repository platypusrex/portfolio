import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Maybe, PageFieldsFragment } from 'types/generated';

const subTitleOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Text fontSize="10" textAlign="center">
        {children}
      </Text>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link color="blue.600" href={node.data.uri}>
        {children}
      </Link>
    ),
  },
};

export type PageHeaderProps = Maybe<PageFieldsFragment['pageHeader']> & {
  extra?: React.ReactNode;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, extra }) => {
  if (!title || !description) {
    return null;
  }

  return (
    <Flex
      paddingY="16"
      flexDir="column"
      alignItems="center"
      position={{ base: 'relative', md: 'static' }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position={{ base: 'static', md: 'relative' }}
      >
        <Heading as="h1" fontSize="32" textTransform="uppercase" textAlign="center">
          {title}
        </Heading>
        {extra && (
          <Flex
            position="absolute"
            right={{ base: '10px', md: '-110px' }}
            top={{ base: '5px', md: 0 }}
          >
            {extra}
          </Flex>
        )}
      </Flex>
      {description?.json && documentToReactComponents(description.json, subTitleOptions)}
    </Flex>
  );
};
