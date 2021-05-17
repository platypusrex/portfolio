import React from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/button';
import { Icon } from 'components/Icon';

interface IconButtonProps {
  icon: 'printer' | 'download';
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <ChakraIconButton
    isRound
    paddingX="3px"
    aria-label="boom"
    background="transparent"
    onClick={onClick}
  >
    <Icon icon={icon} size="md" />
  </ChakraIconButton>
);
