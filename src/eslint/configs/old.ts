import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import globals from 'globals';

import { AUTHOR_NAME_LOWER } from '../prefixes';

export async function old(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: `${AUTHOR_NAME_LOWER}:old_config`,
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.jquery,
          ...globals.node,

          // Rewrite globals anyway
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },

      // Ignore patterns
      ignores: [
        '**/.next/*',
        '**/node_modules/*',
        '**/.github/*',
        'cypress',
        '**/__tests__/e2e/*',
        '*.json',
        '**/*.d.ts',
        '.eslintrc.js',
        'eslint.config.js',
        '.prettierrc',
        '.stylelintrc.js',
        'tsconfig.json',
        'package.json',
        '*.md',
        '*.config.ts',
        '*.config.js',
        '*.md',
      ],
    },
    {
      name: `${AUTHOR_NAME_LOWER}:rules_breakup_1`,
      rules: { '@next/next/no-duplicate-head': 'off' },
    },
    {
      name: `${AUTHOR_NAME_LOWER}:rules_breakup_2`,
      rules: {
        'style/operator-linebreak': 'off',
        'test/consistent-test-it': 'off',
        'test/prefer-lowercase-title': 'off',
        'style/jsx-quotes': 'off',
        'style/multiline-ternary': 'off',
        'style/indent': 'off',
      },
      ignores: ['cypress'],
    },
    {
      name: `${AUTHOR_NAME_LOWER}:prettier`,
      rules: {
        'antfu/if-newline': 'off',
      },
    },
  ];
}
