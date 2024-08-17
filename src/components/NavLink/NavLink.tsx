'use client';
import React from 'react';
import NextLink from 'next/link';
import { NavLink as NavLinkProps } from 'types/generated';
import { Icon, IconProps } from 'components/Icon';

type NavLinkTWProps = Pick<NavLinkProps, 'title' | 'description' | 'icon' | 'href'>;

export function NavLink({ description, icon, title, href }: NavLinkTWProps) {
  if (!href) return null;
  return (
    <NextLink
      href={href}
      className="inline-block text-center cursor-pointer w-[80%] p-[10px] my-[10px]rounded-[2px] rounded-md
       uppercase decoration-[none] transition-all ease-in-out duration-300
        group-hover:w-full group-active:w-full group-focus:w-full
         group-hover:bg-gray-50 group-active:bg-gray-50 group-focus:bg-gray-50
         group-hover:text-red-500 group-active:text-red-500 group-focus:text-red-500"
    >
      <p className="text-[18px] font-bold uppercase mt-4 mb-4">{title}</p>
      <div
        className="flex relative items-center justify-center border-t border-solid border-t-gray-500
          group-hover:border-t-red-500 group-active:border-t-red-500 group-focus:border-t-red-500"
      >
        <span
          className="flex absolute justify-center w-[30px] h-[30px] bg-white transition-all ease-in-out
         duration-300 group-hover:bg-gray-50 group-active:bg-gray-50 group-focus:bg-gray-50"
        >
          <Icon
            icon={icon as IconProps['icon']}
            className="transition-all duration-300 ease-in-out
             group-hover:fill-red-500 group-active:fill-red-500 group-focus:fill-red-500"
          />
        </span>
      </div>
      <p className="text-[9px] mt-5 mb-4">{description}</p>
    </NextLink>
  );
}
