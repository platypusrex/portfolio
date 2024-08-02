module.exports = {
  extends: ['next', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/display-name': 'off',
  },
  overrides: [
    {
      files: ['**/**/pages/**'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
