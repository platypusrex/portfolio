'use client';
import React from 'react';

interface ScrollButtonProps {
  scrollElementId: string;
}

export const ScrollButton: React.FCC<ScrollButtonProps> = ({ scrollElementId, children }) => {
  const handleScrollToElement = () => {
    const scrollEl = document.getElementById(scrollElementId);
    scrollEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      className="flex flex-col w-[200px] h-[200px] absolute z-[1]"
      onClick={handleScrollToElement}
    >
      {children}
    </button>
  );
};
