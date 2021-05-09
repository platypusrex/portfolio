import { inputOutlineVariant, inputSizes } from 'styled/theme/input';
import { ComponentStyleConfig } from '@chakra-ui/react';

export const Textarea: ComponentStyleConfig = {
  sizes: {
    xs: inputSizes.xs.field,
    sm: inputSizes.sm.field,
    md: inputSizes.md.field,
    lg: inputSizes.lg.field,
  },
  variants: {
    outline: () => inputOutlineVariant,
  },
};
