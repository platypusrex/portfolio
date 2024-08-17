import React from 'react';
import { Content } from 'layout/Content';

export default function Loading({ children }: { children: React.ReactNode }) {
  return <Content>{children}</Content>;
}
