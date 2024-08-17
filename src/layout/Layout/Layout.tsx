import React, { Suspense } from 'react';
import { gqlClient } from 'lib/urql/server';
import { NavLinks } from 'gql';
import { AppLayout } from './AppLayout';
import { Loading } from 'components/Loading';
import { NavLinkCollection, NavLinksQuery, NavLinksQueryVariables } from 'types/generated';

type LayoutServerProps = {
  children?: React.ReactNode;
};

export async function Layout({ children }: LayoutServerProps) {
  const { data } = await gqlClient().query<NavLinksQuery, NavLinksQueryVariables>(NavLinks, {});
  const navLinks = data?.navLinkCollection?.items as NavLinkCollection['items'];

  return (
    <div className="grid grid-cols-[0_auto] md:grid-cols-[200px_auto] [transition:300ms] min-h-full">
      <Suspense fallback={<Loading />}>
        <AppLayout navLinks={navLinks}>{children}</AppLayout>
      </Suspense>
    </div>
  );
}
