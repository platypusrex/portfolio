import React from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FormControl, FormControlProps } from 'components/FormControl';

export type TextAreaProps = Partial<TextareaProps> & FormControlProps;

export const TextArea: React.FC<TextAreaProps> = React.memo(
  ({ error, isInvalid, isRequired, ...inputProps }) => (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} error={error}>
      <Textarea {...inputProps} />
    </FormControl>
  )
);
