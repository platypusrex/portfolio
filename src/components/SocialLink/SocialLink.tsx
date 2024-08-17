import React from 'react';
import { Icon } from 'components/Icon';

export interface SocialLinkProps {
  icon: 'email' | 'github' | 'linkedin';
  href: string;
  target: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, target }) => (
  <a
    href={href}
    target={target}
    aria-label={`${icon} link`}
    className="p-[9px] group rounded-full h-fit border border-solid border-black bg-transparent cursor-pointer
     transition-all duration-150 ease-in-out hover:bg-black hover:text-white"
  >
    <span
      className="group-hover:[&>svg]:fill-white group-hover:[&>svg]:transition-all
     group-hover:[&>svg]:duration-150 group-hover:[&>svg]:ease-in-out"
    >
      <Icon icon={icon} size="sm" />
    </span>
  </a>
);
