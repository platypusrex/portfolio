import React from 'react';
import { Circle } from '@chakra-ui/react';
import { Icon } from 'components/Icon';

export interface SocialLinkProps {
  icon: 'email' | 'github' | 'linkedin';
  href: string;
  target: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, target }) => (
  <Circle
    href={href}
    target={target}
    aria-label={`${icon} link`}
    as="a"
    h="fit-content"
    padding="9px"
    border="1px solid black"
    background="transparent"
    cursor="pointer"
    transition="background 0.15s ease-in-out"
    _hover={{ background: 'black', color: 'white' }}
    sx={{
      '&:hover svg': {
        fill: 'white',
        transition: 'fill 0.3s ease-in-out',
      },
    }}
  >
    <Icon icon={icon} size="sm" />
  </Circle>
);
