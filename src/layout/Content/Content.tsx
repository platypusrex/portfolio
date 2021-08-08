import React from 'react';
import { Box, SlideFade } from '@chakra-ui/react';
import { MenuToggle } from 'components/MenuToggle';
import { Loading } from 'components/Loading';
import { useLayoutContext } from 'lib/layoutContext';
import { useLoading } from 'hooks/useLoading';

export const Content: React.FC = ({ children }) => {
  const { isMenuOpen, setMenuOpen, layoutAnimationKey } = useLayoutContext();
  const loading = useLoading();

  if (loading) {
    return <Loading />;
  }

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
