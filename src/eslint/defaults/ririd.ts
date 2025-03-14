import type { RiridOptions } from '../types';

export const defaultRiridOptions: RiridOptions = {
  next: true,
  react: true,
  jsonc: false,
  yaml: false,
  stylistic: {
    semi: true,
    quotes: 'single',
  },
  typescript: {
    overrides: {
      'ts/consistent-type-definitions': ['error', 'interface'],
      'ts/interface-name-prefix': 'off',
      'ts/explicit-function-return-type': 'off',
      'ts/explicit-module-boundary-types': 'off',
      'ts/no-explicit-any': 'off',
    },
  },
  rules: {
    'import/order': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'antfu/top-level-function': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-named-exports': 'off',
    'antfu/consistent-chaining': 'off',
    'perfectionist/sort-exports': 'off',
    'style/no-multiple-empty-lines': 'off',
  },
};
