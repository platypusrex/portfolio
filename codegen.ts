import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());
const schemaUri = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [schemaUri]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: 'src/gql/**/*.graphql',
  generates: {
    'src/types/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        exportFragmentSpreadSubTypes: true,
      },
    },
  },
};

export default config;
