import React from 'react';
import { FormControl } from 'components/FormControl';

export type TextAreaProps = {
  label: string;
  id: string;
  name: string;
  error?: string;
  required?: boolean;
  invalid?: boolean;
  children?: React.ReactNode;
};

export const TextArea: React.FC<TextAreaProps> = React.memo(({ id, name, ...controlProps }) => (
  <FormControl id={id} {...controlProps}>
    <textarea
      id={id}
      name={name}
      rows={6}
      placeholder=" "
      className="shadow-input block blockrounded-t-lg px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-500 bg-white
           border-1 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0
            focus:border-blue-600 peer"
    />
  </FormControl>
));
