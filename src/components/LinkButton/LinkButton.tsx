import React from 'react';
import NextLink from 'next/link';
import { Icon } from 'components/Icon';

interface LinkButtonProps {
  title: string;
  subTitle: string;
  icon: 'file' | 'github';
  href: string;
  external?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  subTitle,
  icon,
  href,
  external = false,
}) => {
  const LinkContent = (
    <div className="grid justify-items-center">
      <Icon icon={icon} size="lg" />
      <p className="text-lg uppercase font-bold mt-2">{title}</p>
      <p className="text-[10px] uppercase m-0">{subTitle}</p>
    </div>
  );

  const Link = !external ? (
    <NextLink href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {LinkContent}
    </NextLink>
  ) : (
    <a href={href}>{LinkContent}</a>
  );

  return <div>{Link}</div>;
};
