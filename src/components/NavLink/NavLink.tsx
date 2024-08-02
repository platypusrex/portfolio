import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/layout';
import { Flex, Text } from '@chakra-ui/react';
import { Icon, IconProps } from 'components/Icon';
import { NavLink as NavLinkProps } from 'types/generated';

const pseudoStyles = {
  width: '80%',
  background: 'gray.50',
};

export const NavLink: React.FC<Pick<NavLinkProps, 'title' | 'description' | 'icon' | 'href'>> = ({
  href,
  title,
  description,
  icon,
}) => {
  const { pathname } = useRouter();

  if (!href) {
    return null;
  }

  return (
    <NextLink href={href} passHref>
      <Link
        {...(pathname === href ? { 'aria-current': 'page' } : {})}
        display="inline-block"
        textAlign="center"
        cursor="pointer"
        width="70%"
        p="10px"
        my="10px"
        borderRadius="2px"
        transition="all 0.25s ease-in-out"
        textTransform="uppercase"
        textDecoration="none"
        _hover={{ ...pseudoStyles, color: 'red.400' }}
        _focus={{ ...pseudoStyles, color: 'red.500' }}
        _activeLink={{ ...pseudoStyles, color: 'red.500' }}
        sx={{
          path: { transition: 'fill 0.25s ease-in-out' },
          '&[aria-current=page] path, &:hover path, &:focus path': { fill: 'red.500' },
          '&[aria-current=page] span, &:hover span, &:focus span': {
            background: 'gray.50',
            transition: 'background 0.25s ease-in-out',
          },
        }}
      >
        <Text
          fontSize="18px"
          casing="uppercase"
          fontWeight="bold"
          marginBlockStart="1em"
          marginBlockEnd="0.875em"
        >
          {title}
        </Text>
        {icon && (
          <Flex
            justify="center"
            align="center"
            borderTop="1px solid"
            borderColor="gray.500"
            position="relative"
          >
            <Flex
              as="span"
              position="absolute"
              justify="center"
              w="30px"
              h="30px"
              bg="white"
              transition="background 0.15s ease-in-out"
            >
              <Icon icon={icon as IconProps['icon']} />
            </Flex>
          </Flex>
        )}
        <Text fontSize="10px" marginBlockStart="1.5rem" marginBlockEnd="1rem">
          {description}
        </Text>
      </Link>
    </NextLink>
  );
};
