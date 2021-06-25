import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { ResponsiveObject } from '@chakra-ui/styled-system/dist/types/utils';
import me from '../../../public/images/me_mountain.jpeg';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

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

  return (
    <Box position="relative" w="100%" h="100vh">
      <Image
        src={src}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt={alt}
        id="hero"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
    </Box>
  );
};
