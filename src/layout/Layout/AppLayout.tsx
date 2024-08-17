'use client';
import React from 'react';
import { LayoutProvider } from 'lib/layoutContext';
import { Menu } from 'layout/Menu';
import { NavLinkCollection } from 'types/generated';

type AppLayoutProps = {
  children: React.ReactNode;
  navLinks?: NavLinkCollection['items'] | null;
};

export function AppLayout({ children, navLinks }: AppLayoutProps) {
  return (
    <LayoutProvider>
      <Menu navLinks={navLinks} />
      {children}
    </LayoutProvider>
  );
}
