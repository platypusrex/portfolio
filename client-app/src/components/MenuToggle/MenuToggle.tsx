import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { hamburgerBars } from 'components/MenuToggle/styles';

interface MenuToggleProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => (
  <Flex
    display={{ md: 'none' }}
    as="button"
    justifyContent="center"
    alignItems="center"
    position="absolute"
    top={0}
    left={0}
    zIndex={1}
    h="50px"
    w="62px"
    onClick={onClick}
    aria-label="open the navigation menu"
  >
    <Flex
      justifyContent="center"
      position="relative"
      h="38px"
      w="48px"
      marginX="6px"
      overflow="hidden"
    >
      {hamburgerBars.map(({ animate, animateReverse, ...rest }, i) => (
        <Box
          {...rest}
          key={i.toString(10) + rest}
          as="span"
          position="absolute"
          h="4px"
          width="35px"
          bg="gray.800"
          animation={`0.5s alternate both ${isOpen ? animate : animateReverse}`}
        />
      ))}
    </Flex>
  </Flex>
);
