import httpProxyMiddleware from 'next-http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

const target = `https://graphql.contentful.com`;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const graphql = async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  httpProxyMiddleware(req, res, {
    target,
    pathRewrite: {
      '^/api/graphql': `/content/v1/spaces/${spaceId}`,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    secure: false,
  });

export default graphql;
