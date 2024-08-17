import React from 'react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Maybe, PageFieldsFragment } from 'types/generated';
import NextLink from 'next/link';

const subTitleOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-[10px] text-center">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <NextLink className="text-blue-400 hover:underline" href={node.data.uri}>
        {children}
      </NextLink>
    ),
  },
};

export type PageHeaderProps = Maybe<PageFieldsFragment['pageHeader']> & {
  extra?: React.ReactNode;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, extra }) => {
  if (!title || !description) {
    return null;
  }

  return (
    <header className="pt-16 pb-8  md:py-16 flex flex-col items-center relative md:static z-10">
      <div className="flex flex-col justify-center items-center static md:relative">
        <h1 className="text-[26px] sm:text-[32px] md:leading-[1.2] font-bold uppercase text-center">
          {title}
        </h1>
        {extra && (
          <div className="absolute right-[10px] md:right-[-110px] top-[5px] md:top-0">{extra}</div>
        )}
        {description?.json && documentToReactComponents(description.json, subTitleOptions)}
      </div>
    </header>
  );
};
