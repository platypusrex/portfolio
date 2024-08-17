'use client';
import React from 'react';
import { Nanum_Pen_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import { letter, sentence } from 'components/AnimatedText/constants';

const nanumPenScript = Nanum_Pen_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

interface AnimatedTextProps {
  className?: string;
  staggerDelay?: number;
  children: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  staggerDelay,
  className,
}) => (
  <motion.span
    className={`${nanumPenScript.className} ${className}`}
    variants={sentence(staggerDelay)}
    initial="hidden"
    animate="visible"
  >
    {children.split('').map((char, i) => (
      <motion.span className="font-[inherit]" key={`${char}:${i}`} variants={letter}>
        {char}
      </motion.span>
    ))}
  </motion.span>
);
