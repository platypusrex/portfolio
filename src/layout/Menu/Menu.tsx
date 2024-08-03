import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { NavLink } from 'components/NavLink';
import { useLayoutContext } from 'lib/layoutContext';
import { item, list } from 'layout/Menu/constants';
import { PageFieldsFragment } from 'types/generated';

const MotionFlex = motion<FlexProps>(Flex);

interface MenuProps {
  navLinks: PageFieldsFragment['navLinksCollection'];
}

export const Menu: React.FC<MenuProps> = ({ navLinks }) => {
  const { isMenuOpen } = useLayoutContext();

  // const links = [
  //   ...(navLinks?.items ?? []),
  //   { title: 'Projects', description: "Things I've built", href: '/projects', icon: 'wrench' },
  // ];

  return (
    <motion.div initial="hidden" animate="visible" variants={list}>
      <Box
        as="nav"
        overflowY="scroll"
        display="grid"
        gridArea="sidebar"
        borderWidth="1px"
        borderColor="gray.100"
        borderRight="1px solid #e8e8e8"
        position="fixed"
        w="200px"
        h="100vh"
        transition="transform 0.5s ease-in-out"
        transform={{
          base: isMenuOpen ? 'translateX(0)' : 'translateX(-200px)',
          md: 'translateX(0)',
        }}
      >
        <Box marginBlock="auto">
          {navLinks?.items.map((navLink, i) => (
            <MotionFlex
              key={`${i}:${navLink?.__typename}`}
              w="100%"
              justifyContent="center"
              variants={item}
            >
              <NavLink {...navLink} />
            </MotionFlex>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};
