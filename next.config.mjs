import withSvgr from 'next-plugin-svgr';
import withGraphql from 'nextjs-plugin-graphql';
import withPlugins from 'next-compose-plugins';

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
};

export default async (phase, { defaultConfig }) =>
  withPlugins([withSvgr, withGraphql], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
