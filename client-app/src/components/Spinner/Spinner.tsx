import React from 'react';
import { Box } from '@chakra-ui/react';
import { stretchDelay } from 'components/Spinner/styles';

export const Spinner: React.FC = () => (
  <Box w="25px" h="25px">
    {['0s', '-1.1s', '-1.0s', '-0.9s', '-0.8s'].map((delay) => (
      <Box
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
