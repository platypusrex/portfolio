import React from 'react';
import { Flex, Progress } from '@chakra-ui/react';
import { AnimatedText } from 'components/AnimatedText';

export const Loading: React.FC = () => (
  <Flex
    h="100vh"
    direction="column"
    justify="center"
    marginInline="auto"
    maxWidth="300px"
    padding="10px"
  >
    <AnimatedText
      text="Loading content..."
      staggerDelay={0.05}
      color="gray.800"
      alignSelf="center"
      textTransform="uppercase"
      fontSize="xl"
      fontWeight="bold"
      mb="10px"
    />
    <Progress height="2px" isIndeterminate colorScheme="red" />
  </Flex>
);
