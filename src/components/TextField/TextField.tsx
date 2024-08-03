import React from 'react';
import { InputProps } from '@chakra-ui/input';
import { Input } from '@chakra-ui/react';
import { FormControl, FormControlProps } from 'components/FormControl';

export type TextFieldProps = Partial<InputProps> &
  FormControlProps & {
    children?: React.ReactNode;
  };

export const TextField = React.memo<TextFieldProps>(
  ({ error, isInvalid, isRequired, ...inputProps }) => (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} error={error}>
      <Input {...inputProps} />
    </FormControl>
  )
);
