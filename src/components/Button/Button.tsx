'use client';
import { useFormStatus } from 'react-dom';
import { Spinner } from 'components/Spinner';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  children: string;
  loadingText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, loadingText, onClick }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center justify-center text-white bg-gradient-to-r from-gray-600 via-gray-800 to-black
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800
            shadow-lg shadow-gray-500/50 font-medium text-md px-6 py-3.5 text-center me-2 mb-2"
    >
      <span className="relative flex items-center justify-center [&_span]:left-[-30px] w-fit">
        {pending && <Spinner />}
        {pending ? (loadingText ?? children) : children}
      </span>
    </button>
  );
}
