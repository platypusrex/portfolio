import withSvgr from 'next-plugin-svgr';
import withGraphql from 'nextjs-plugin-graphql';
import withPlugins from 'next-compose-plugins';

const target = `https://graphql.contentful.com`;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: `${target}/content/v1/spaces/${spaceId}`,
      },
    ];
  },
};

export default async (phase, { defaultConfig }) =>
  withPlugins([withSvgr, withGraphql], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
