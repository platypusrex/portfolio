import React from 'react';
import dynamic from 'next/dynamic';

const getIconSize = (size?: IconProps['size']) => {
  if (typeof size === 'number') {
    return size;
  }

  if (!size || size === 'sm') {
    return 16;
  } else if (size === 'md') {
    return 22;
  } else {
    return 48;
  }
};

export interface IconProps {
  icon: 'user' | 'email' | 'download' | 'file' | 'printer' | 'wrench' | 'github' | 'linkedin';
  size?: number | 'sm' | 'md' | 'lg';
  title?: string;
}

interface IconPropsInternal {
  fontSize: number;
  title?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size, title }) => {
  const Icon = dynamic<IconPropsInternal>(() => import(`../../../public/svg/${icon}.svg`));
  return <Icon title={title} fontSize={getIconSize(size)} className="icon" />;
};
