import React from 'react';
import { FormControl } from 'components/FormControl';

export type TextFieldProps = {
  label: string;
  id: string;
  name: string;
  error?: string;
  required?: boolean;
  invalid?: boolean;
  children?: React.ReactNode;
};

export const TextField = React.memo<TextFieldProps>(({ label, id, name, required, error }) => (
  <FormControl error={error} label={label} id={id} required={required}>
    <input
      type="text"
      id={id}
      name={name}
      className="shadow-input blockrounded-t-lg px-4 pb-2.5 pt-6 w-full text-sm text-gray-500 bg-white
        border-1 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0
          focus:border-blue-600 peer"
      placeholder=" "
    />
  </FormControl>
));
