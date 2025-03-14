import ririd from '@ririd/eslint-config';
import { deepmerge } from 'deepmerge-ts';
import globals from 'globals';

import { defaultRiridOptions } from './defaults';
import type { RiridOptions, UserConfig } from './types';

/**
 * XenoPOMP`s default ESLint config. Uses @ririd/eslint-config
 * under the hood.
 *
 * @param options
 * @param userConfigs
 *
 * @example
 * import { xenopomp } from 'xenopomp-essentials';
 *
 * export default xenopomp(
 *   // Setup Ririd options
 *   {
 *     react: false,
 *   },
 *
 *   // Setup custom user configs
 *   {
 *     name: 'Custom config #1',
 *     rules: {
 *       'some/rule-name': 'warn',
 *     },
 *     // ...
 *   },
 *   // ...
 * );
 */
export default function xenopomp(
  options?: RiridOptions,
  ...userConfigs: UserConfig[]
): ReturnType<typeof ririd> {
  return ririd(
    deepmerge(defaultRiridOptions, options),

    // User configs
    {
      name: 'Old config',
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
      name: 'Rules breakup #1',
      rules: { '@next/next/no-duplicate-head': 'off' },
    },
    {
      name: 'Rules breakup #2',
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
    ...userConfigs,
  );
}
