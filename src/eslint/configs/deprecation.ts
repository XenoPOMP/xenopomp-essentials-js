import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import { fixupPluginRules } from '@eslint/compat';
import type { Linter } from 'eslint';
import plugin from 'eslint-plugin-deprecation';

import type { Options as ConfigOptions } from '../config';

type Options = Pick<ConfigOptions, 'tsconfigPath'>;

export async function deprecation(
  severity: Linter.RuleEntry,
  options?: Options,
): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'Deprecation plugin',
      languageOptions: {
        parserOptions: {
          project: options?.tsconfigPath ?? './tsconfig.json',
        },
      },
      plugins: {
        // @ts-expect-error Wrong library types
        deprecation: fixupPluginRules(plugin),
      },
      rules: {
        'deprecation/deprecation': severity,
      },
      files: ['**/*.ts', '**/*.tsx'],
    },
  ];
}
