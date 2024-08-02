import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql',
  documents: 'src/gql/**/*.graphql',
  generates: {
    'src/types/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        exportFragmentSpreadSubTypes: true,
      },
    },
    'src/hooks/generated.ts': {
      preset: 'import-types',
      presetConfig: {
        extension: '.ts',
        typesPath: '../types/generated',
      },
      plugins: ['typescript-react-apollo'],
      config: {
        documentMode: 'external',
        importDocumentNodeExternallyFrom: 'gql',
        addDocBlocks: false,
      },
    },
  },
};

export default config;
