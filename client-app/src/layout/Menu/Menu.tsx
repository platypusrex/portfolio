import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NavLink } from 'components/NavLink';
import { PageFieldsFragment } from 'types/generated';
import { useLayoutContext } from 'lib/layoutContext';

interface MenuProps {
  navLinks: PageFieldsFragment['navLinksCollection'];
}

export const Menu: React.FC<MenuProps> = ({ navLinks }) => {
  const { isMenuOpen } = useLayoutContext();
  return (
    <Flex
      as="nav"
      justify="center"
      align="center"
      direction="column"
      gridArea="sidebar"
      borderWidth="1px"
      borderColor="gray.100"
      borderRight="1px solid #e8e8e8"
      position="fixed"
      minW="200px"
      h="100vh"
      transition="transform 0.5s ease-in-out"
      transform={{ base: isMenuOpen ? 'translateX(0)' : 'translateX(-200px)', md: 'translateX(0)' }}
    >
      {navLinks?.items.map((navLink, i) => (
        <NavLink key={i} {...navLink} />
      ))}
    </Flex>
  );
};
