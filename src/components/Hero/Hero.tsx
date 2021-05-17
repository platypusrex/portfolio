import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { ResponsiveObject } from '@chakra-ui/styled-system/dist/types/utils';

export interface HeroProps {
  src: string | ResponsiveObject<string>;
  alt: string;
  parallax?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ src, alt, parallax = true }) => {
  const breakpointConfig = typeof src === 'string' ? { base: src } : src;
  const imgUrl = useBreakpointValue(breakpointConfig);

  useEffect(() => {
    const target = document.getElementById('hero') as HTMLDivElement;
    if (!target) {
      return;
    }

    function handleScroll() {
      target.style.transform = `scale(1.1) translateY(${window.pageYOffset * 0.25}px)`;
    }

    if (parallax) {
      target.style.transform = `scale(1.1) translateY(${window.pageYOffset * 0.25}px)`;
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (parallax) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  });

  if (!imgUrl) {
    return null;
  }

  return (
    <Box position="relative" w="100%" h="100vh">
      <Image src={imgUrl} alt={alt} id="hero" layout="fill" objectFit="cover" />
    </Box>
  );
};
