const withSvgr = require('next-plugin-svgr');
const withGraphql = require('nextjs-plugin-graphql');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = async (phase, { defaultConfig }) =>
  withPlugins([withSvgr, withGraphql], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
