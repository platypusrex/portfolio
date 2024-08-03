import React, { useEffect } from 'react';
import Image, { StaticImageData } from "next/legacy/image";
import { Box, ResponsiveObject } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';

export interface HeroProps {
  src: ResponsiveObject<StaticImageData>;
  alt: string;
  parallax?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ src, alt, parallax = true }) => {
  const imgUrl = useBreakpointValue(src);

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
      <Image src={imgUrl} alt={alt} id="hero" layout="fill" objectFit="cover" placeholder="blur" />
    </Box>
  );
};
