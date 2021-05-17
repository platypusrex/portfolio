import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 3,
  },
  variants: {
    form: () => ({
      fontSize: 'md',
      transition: 'all .25s ease-in-out',
      bg: 'gray.800',
      color: 'white',
      _hover: {
        bg: 'gray.800',
        _disabled: {
          background: 'gray.300',
        },
      },
      _active: { bg: 'black' },
      _disabled: {
        bg: 'gray.300',
        opacity: 1,
      },
    }),
  },
};
