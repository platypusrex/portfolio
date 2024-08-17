'use client';
import React, { ComponentProps, useEffect } from 'react';
import Image from 'next/image';
import { useMatchMedia } from 'hooks/useMatchMedia';

export interface HeroProps {
  src: {
    desktop: ComponentProps<typeof Image>['src'];
    mobile: ComponentProps<typeof Image>['src'];
  };
  alt: string;
  parallax?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ src, alt, parallax = true }) => {
  const isDesktop = useMatchMedia(768);

  useEffect(() => {
    const target = document.getElementById('hero') as HTMLDivElement;
    if (!target) {
      return;
    }

    function handleScroll() {
      target.style.transform = `scale(1.1) translateY(${window.scrollY * 0.25}px)`;
    }

    if (parallax) {
      target.style.transform = `scale(1.1) translateY(${window.scrollY * 0.25}px)`;
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (parallax) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  });

  if (!src) return null;

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <Image
        src={isDesktop ? src.desktop : src.mobile}
        alt={alt}
        id="hero"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
