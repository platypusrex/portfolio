import React from 'react';
import user from 'public/svg/user.svg';
import email from 'public/svg/email.svg';
import download from 'public/svg/download.svg';
import file from 'public/svg/file.svg';
import printer from 'public/svg/printer.svg';
import wrench from 'public/svg/wrench.svg';
import github from 'public/svg/github.svg';
import linkedin from 'public/svg/linkedin.svg';

const getIconSize = (size?: IconProps['size']) => {
  if (typeof size === 'number') return size;

  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 22;
    case 'lg':
      return 48;
    default:
      return 16;
  }
};

const iconMap = {
  user,
  email,
  download,
  file,
  printer,
  wrench,
  github,
  linkedin,
} as const;

export type IconProps = {
  className?: string;
  icon: 'user' | 'email' | 'download' | 'file' | 'printer' | 'wrench' | 'github' | 'linkedin';
  size?: number | 'sm' | 'md' | 'lg';
  title?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, size, title, className }) => {
  const Icon = iconMap[icon];
  return (
    <Icon
      title={title}
      fontSize={getIconSize(size)}
      className={`icon ${className ? className : ''}`}
    />
  );
};
