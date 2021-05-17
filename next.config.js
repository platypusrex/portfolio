const withSvgr = require('next-plugin-svgr');
const withGraphql = require('next-plugin-graphql');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = withPlugins([withSvgr, withGraphql], nextConfig);
