import React from 'react';
import { Nanum_Pen_Script } from 'next/font/google';
import { Text, TextProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { letter, sentence } from 'components/AnimatedText/constants';

const MotionText = motion(Text);
const nanumPenScript = Nanum_Pen_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

interface AnimatedTextProps extends TextProps {
  text: string;
  staggerDelay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  staggerDelay,
  fontSize = '3xl',
  ...textProps
}) => (
  <MotionText
    className={nanumPenScript.className}
    fontSize={fontSize}
    variants={sentence(staggerDelay)}
    initial="hidden"
    animate="visible"
    {...textProps}
  >
    {text.split('').map((char, i) => (
      <motion.span key={`${char}:${i}`} variants={letter}>
        {char}
      </motion.span>
    ))}
  </MotionText>
);
