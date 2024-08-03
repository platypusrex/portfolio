import withSvgr from 'next-plugin-svgr';
import withGraphql from 'nextjs-plugin-graphql';
import withPlugins from 'next-compose-plugins';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '*',
      },
    ],
  },
};

export default async (phase, { defaultConfig }) =>
  withPlugins([withSvgr, withGraphql], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
