import { ComponentStyleConfig } from '@chakra-ui/react';

export const inputSizes = {
  xs: {
    field: {
      fontSize: 'sm',
      borderRadius: 3,
      _hover: {
        borderColor: 'black',
      },
    },
  },
  sm: {
    field: {
      fontSize: 'sm',
      borderRadius: 3,
      _hover: {
        borderColor: 'black',
      },
    },
  },
  md: {
    field: {
      fontSize: 'sm',
      borderRadius: 3,
      _hover: {
        borderColor: 'black',
      },
    },
  },
  lg: {
    field: {
      fontSize: 'sm',
      borderRadius: 3,
      _hover: {
        borderColor: 'black',
      },
    },
  },
};

export const inputOutlineVariant = {
  bg: 'white',
  transition: 'all .25s ease-in-out',
  borderColor: 'gray.500',
  _hover: {
    borderColor: 'black',
  },
};

export const Input: ComponentStyleConfig = {
  sizes: inputSizes,
  variants: {
    outline: () => ({
      field: inputOutlineVariant,
    }),
  },
};
