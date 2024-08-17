import React from 'react';
import { Icon } from 'components/Icon';

interface IconButtonProps {
  icon: 'printer' | 'download';
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button
    className="inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-middle
     outline-2 outline-transparent outline-offset-[2px] leading-[1.2] font-medium transition-all duration-200
      select-none h-10 min-w-10 text-base rounded-full p-0 bg-transparent hover:bg-gray-200"
    aria-label="boom"
    onClick={onClick}
  >
    <Icon icon={icon} size="md" />
  </button>
);
