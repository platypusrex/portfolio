import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { letter, sentence } from 'components/HelloWorld/constants';

const MotionText = motion(Text);

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
