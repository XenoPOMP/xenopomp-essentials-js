import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config';

import { AUTHOR_NAME_LOWER } from '../prefixes';

export async function react(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      name: `${AUTHOR_NAME_LOWER}:react`,
      rules: {
        'react-refresh/only-export-components': 'off',
        'react/no-clone-element': 'off',
        'react/no-missing-component-display-name': 'off',
      },
    },
  ];
}
