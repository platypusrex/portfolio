import React from 'react';
import { Box } from '@chakra-ui/react';
import { MenuToggle } from 'components/MenuToggle';
import { useLayoutContext } from 'lib/layoutContext';

export const Content: React.FC = ({ children }) => {
  const { isMenuOpen, setMenuOpen } = useLayoutContext();
  return (
    <Box
      gridArea="content"
      as="article"
      position="relative"
      transition="transform 0.5s ease-in-out"
      transform={{ base: isMenuOpen ? 'translateX(200px)' : 'translateX(0)', md: 'translate(0)' }}
    >
      <MenuToggle isOpen={isMenuOpen} onClick={() => setMenuOpen((prevState) => !prevState)} />
      {children}
    </Box>
  );
};
