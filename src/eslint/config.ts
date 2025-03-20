import type {
  Awaitable,
  OptionsConfig,
  TypedFlatConfigItem,
} from '@antfu/eslint-config';
import { antfu } from '@antfu/eslint-config';
import { deepmerge } from 'deepmerge-ts';

import type { Undefinable } from '@/types';

import { all, markdown, next, old, react } from './configs';
import type { Configs, CustomConfig, UserConfigItem } from './types';

type Options = OptionsConfig & CustomConfig & TypedFlatConfigItem;

export default function xenopomp(
  options?: Options,
  ...userConfigs: UserConfigItem[]
): Configs {
  const configs: Awaitable<TypedFlatConfigItem[]>[] = [];

  options = {
    ...options,
    react: deepmerge<
      [Undefinable<Options['react']>, Undefinable<Options['react']>]
    >(true, options?.react),

    vue: deepmerge<[Undefinable<Options['vue']>, Undefinable<Options['vue']>]>(
      false,
      options?.vue,
    ),

    jsonc: deepmerge<
      [Undefinable<Options['jsonc']>, Undefinable<Options['jsonc']>]
    >(false, options?.jsonc),

    yaml: deepmerge<
      [Undefinable<Options['yaml']>, Undefinable<Options['yaml']>]
    >(false, options?.yaml),

    stylistic: deepmerge<
      [Undefinable<Options['stylistic']>, Undefinable<Options['stylistic']>]
    >(
      {
        semi: true,
        quotes: 'single',
      },
      options?.stylistic,
    ),

    typescript: deepmerge<
      [Undefinable<Options['typescript']>, Undefinable<Options['typescript']>]
    >(
      {
        overrides: {
          'ts/consistent-type-definitions': ['error', 'interface'],
          'ts/interface-name-prefix': 'off',
          'ts/explicit-function-return-type': 'off',
          'ts/explicit-module-boundary-types': 'off',
          'ts/no-explicit-any': 'off',
        },
      },
      options?.typescript,
    ),

    rules: deepmerge<
      [Undefinable<Options['rules']>, Undefinable<Options['rules']>]
    >(
      {
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
      options?.rules,
    ),
  };

  if (options.react ?? true) configs.push(react());

  if (options.all ?? true) configs.push(all());

  if (options.next ?? false) configs.push(next());

  if (options.markdown ?? true) configs.push(markdown());

  // Apply previous configs
  configs.push(old());

  return antfu(options, ...configs, ...userConfigs);
}
