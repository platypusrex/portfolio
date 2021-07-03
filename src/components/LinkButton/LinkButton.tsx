import React from 'react';
import NextLink from 'next/link';
import { Box, Text, VStack } from '@chakra-ui/react';
import { Icon } from 'components/Icon';
import { SystemStyleObject } from '@chakra-ui/styled-system';

interface LinkButtonProps {
  title: string;
  subTitle: string;
  icon: 'file' | 'github';
  href: string;
  external?: boolean;
  sx?: SystemStyleObject;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  subTitle,
  icon,
  href,
  external = false,
  sx,
}) => {
  const LinkContent = (
    <VStack>
      <Icon icon={icon} size="lg" />
      <Text fontSize="lg" textTransform="uppercase" fontWeight="bold" mb={1}>
        {title}
      </Text>
      <Text as="span" fontSize="10px" textTransform="uppercase" m="0px !important">
        {subTitle}
      </Text>
    </VStack>
  );

  const Link = !external ? (
    <NextLink href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{LinkContent}</a>
    </NextLink>
  ) : (
    <a href={href}>{LinkContent}</a>
  );

  return <Box sx={sx}>{Link}</Box>;
};
