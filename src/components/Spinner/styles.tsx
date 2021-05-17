import { keyframes } from '@chakra-ui/react';

export const stretchDelay = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
`;
