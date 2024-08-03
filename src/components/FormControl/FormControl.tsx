import React from 'react';
import {
  FormControl as ChakraFormControl,
  FormControlOptions,
  FormErrorMessage,
} from '@chakra-ui/react';

export interface FormControlProps extends Pick<FormControlOptions, 'isInvalid' | 'isRequired'> {
  error?: string;
}

export const FormControl: React.FCC<FormControlProps> = ({
  children,
  isInvalid,
  isRequired,
  error,
}) => (
  <ChakraFormControl isInvalid={isInvalid} isRequired={isRequired}>
    {children}
    <FormErrorMessage bg="rgba(255, 255, 255, 0.95)" p={2} mt={0}>
      {error}
    </FormErrorMessage>
  </ChakraFormControl>
);
