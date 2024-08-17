import React from 'react';
import { AnimatedText } from 'components/AnimatedText';

export const Loading: React.FC = () => (
  <div className="h-screen flex flex-col justify-center mx-auto max-w-[300px] p-[10px]">
    <AnimatedText
      className="text-gray-800 self-center uppercase text-xl font-bold mb-[10px]"
      staggerDelay={0.05}
    >
      Loading content...
    </AnimatedText>
    {/*TODO: add progress bar*/}
    {/*<Progress height="2px" isIndeterminate colorScheme="red" />*/}
  </div>
);
