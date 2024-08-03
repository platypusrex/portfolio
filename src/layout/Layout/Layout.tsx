import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Menu } from 'layout/Menu/Menu';
import { Content } from 'layout/Content/Content';
import { Maybe, PageFieldsFragment } from 'types/generated';

interface LayoutProps {
  navLinks?: Maybe<PageFieldsFragment['navLinksCollection']>;
}

export const Layout: React.FCC<LayoutProps> = ({ children, navLinks }) => (
  <Grid templateColumns={{ base: '0 1fr', md: '200px 1fr' }} templateAreas={`'sidebar content'`}>
    {navLinks && <Menu navLinks={navLinks} />}
    <Content>{children}</Content>
  </Grid>
);
