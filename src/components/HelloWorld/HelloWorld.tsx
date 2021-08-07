import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { letter, sentence } from 'components/HelloWorld/constants';

const MotionText = motion(Text);

interface HelloWorldProps {
  text: string;
  color: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({
  text = 'Hello world!',
  color = 'white',
}) => (
  <MotionText
    fontFamily="'Nanum Pen Script', sans-serif"
    fontSize="3xl"
    lineHeight="25px"
    color={color}
    transform="rotate(-20deg)"
    m="40px 25px 0"
    variants={sentence}
    initial="hidden"
    animate="visible"
  >
    {text.split('').map((char, i) => (
      <motion.span key={`${char}_${i}`} variants={letter}>
        {char}
      </motion.span>
    ))}
  </MotionText>
);
