'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLayoutContext } from 'lib/layoutContext';
import { MenuToggle } from 'components/MenuToggle';

type ContentServerProps = {
  children?: React.ReactNode;
};

export function Content({ children }: ContentServerProps) {
  const { isMenuOpen, setMenuOpen } = useLayoutContext();
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div
        className={`transition-transform duration-[325ms] ease-in-out h-full
         ${isMenuOpen ? 'translate-x-[200px]' : 'translate-x-0'}`}
      >
        <MenuToggle isOpen={isMenuOpen} onClick={setMenuOpen} />
        {children}
      </div>
    </motion.main>
  );
}
