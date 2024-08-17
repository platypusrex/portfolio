import React from 'react';

const animationDelay = ['0s', '-1.1s', '-1.0s', '-0.9s', '-0.8s'];

export const Spinner: React.FC = () => (
  <span className="w-[25px] h-[25px] block absolute">
    {animationDelay.map((delay, i) => (
      <span
        key={i.toString()}
        style={{ animationDelay: delay }}
        className={`bg-white mr-[1px] inline-block h-full w-[3px] animate-[1.2s_ease-in-out_infinite_stretch]`}
      />
    ))}
  </span>
);
