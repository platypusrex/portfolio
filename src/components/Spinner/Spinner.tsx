import React from 'react';
import { Box } from '@chakra-ui/react';
import { stretchDelay } from 'components/Spinner/styles';

const animationDelay = ['0s', '-1.1s', '-1.0s', '-0.9s', '-0.8s'];

export const Spinner: React.FC = () => (
  <Box w="25px" h="25px">
    {animationDelay.map((delay, i) => (
      <Box
        key={i.toString()}
        bg="white"
        mr="1px"
        display="inline-block"
        h="100%"
        w="3px"
        animation={`${stretchDelay} 1.2s infinite ${delay} ease-in-out`}
      />
    ))}
  </Box>
);
