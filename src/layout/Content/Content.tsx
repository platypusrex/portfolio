import React from 'react';
import { Box, SlideFade } from '@chakra-ui/react';
import { MenuToggle } from 'components/MenuToggle';
import { useLayoutContext } from 'lib/layoutContext';

export const Content: React.FC = ({ children }) => {
  const { isMenuOpen, setMenuOpen, layoutAnimationKey } = useLayoutContext();
  return (
    <SlideFade offsetY="50px" in unmountOnExit key={layoutAnimationKey}>
      <Box
        gridArea="content"
        as="article"
        position="relative"
        transition="transform 0.5s ease-in-out"
        transform={{ base: isMenuOpen ? 'translateX(200px)' : 'translateX(0)', md: 'translate(0)' }}
      >
        <MenuToggle isOpen={isMenuOpen} onClick={setMenuOpen} />
        {children}
      </Box>
    </SlideFade>
  );
};
