import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Text } from '@chakra-ui/react';

const MotionText = motion(Text);

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const letter: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const HelloWorld: React.FC = () => (
  <MotionText
    fontFamily="'Nanum Pen Script', sans-serif"
    fontSize="3xl"
    lineHeight="25px"
    color="white"
    transform="rotate(-20deg)"
    m="40px 25px 0"
    variants={sentence}
    initial="hidden"
    animate="visible"
  >
    {'Hello world!'.split('').map((char, i) => (
      <motion.span key={`${char}_${i}`} variants={letter}>
        {char}
      </motion.span>
    ))}
  </MotionText>
);
