'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { item, list } from 'layout/Menu/constants';
import { useLayoutContext } from 'lib/layoutContext';
import { NavLink } from 'components/NavLink';
import { NavLinkCollection } from 'types/generated';

export function Menu({ navLinks }: { navLinks?: NavLinkCollection['items'] | null }) {
  const { isMenuOpen } = useLayoutContext();
  return (
    <motion.aside initial="hidden" animate="visible" variants={list}>
      <nav
        className={`fixed grid border-r border-gray-300 h-screen overflow-y-scroll w-[200px] p-6
         transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-0' : 'translate-x-[-200px] md:translate-x-0'}`}
      >
        <div className="m-[auto_0px] grid gap-4">
          {navLinks?.map((navLink, i) => (
            <motion.div
              key={`${i}:${navLink?.__typename}`}
              className="group flex justify-center w-full"
              variants={item}
            >
              {navLink?.href && <NavLink {...navLink} />}
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.aside>
  );
}
