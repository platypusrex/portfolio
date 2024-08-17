import React from 'react';

type FormControlProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
};

export const FormControl: React.FCC<FormControlProps> = ({
  children,
  id,
  label,
  required,
  error,
}) => (
  <div className="relative">
    {children}
    <label
      htmlFor={id}
      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3
           scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-900 peer-focus:font-bold
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-[&:not(:placeholder-shown)]:font-bold  peer-[&:not(:placeholder-shown)]:text-gray-900
             peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
    >
      {label} {required && '*'}
    </label>
    {error && (
      <p className="bg-red-900/65 p-2 mt-1.5 text-xs text-white w-fit">
        <span className="font-medium p-2">{error}</span>
      </p>
    )}
  </div>
);
