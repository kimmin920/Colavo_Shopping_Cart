module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'indent': ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-plusplus': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['warn', { argsIgnorePattern: 'err|req|res|next' }],
    'func-names': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-restricted-syntax': ['error', 'ForOfStatement'],
    'no-await-in-loop': 'off',
    'object-shorthand': ['error', 'properties'],
    'no-param-reassign': ['error', { props: false }],
    'arrow-body-style': ['warn', 'as-needed'],
    'wrap-iife': ['error', 'inside'],
    'no-unused-expressions': 'off',
  },
};
