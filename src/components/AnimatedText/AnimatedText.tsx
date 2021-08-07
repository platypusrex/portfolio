import React from 'react';
import { letter, sentence } from 'components/AnimatedText/constants';
import { motion } from 'framer-motion';
import { Text, TextProps } from '@chakra-ui/react';

const MotionText = motion(Text);

interface AnimatedTextProps extends TextProps {
  text: string;
  staggerDelay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  staggerDelay,
  fontFamily = `'Nanum Pen Script', sans-serif`,
  fontSize = '3xl',
  ...textProps
}) => (
  <MotionText
    fontFamily={fontFamily}
    fontSize={fontSize}
    variants={sentence(staggerDelay)}
    initial="hidden"
    animate="visible"
    {...textProps}
  >
    {text.split('').map((char, i) => (
      <motion.span key={`${char}_${i}`} variants={letter}>
        {char}
      </motion.span>
    ))}
  </MotionText>
);
