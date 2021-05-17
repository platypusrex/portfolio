import React, { MutableRefObject } from 'react';
import { Flex } from '@chakra-ui/react';

interface ScrollButtonProps {
  scrollElementRef: MutableRefObject<HTMLElement | null>;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollElementRef, children }) => {
  const handleScrollToElement = () => {
    scrollElementRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex
      flexDirection="column"
      w="200px"
      h="200px"
      position="absolute"
      as="button"
      zIndex="1"
      onClick={handleScrollToElement}
    >
      {children}
    </Flex>
  );
};
