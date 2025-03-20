import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import recommended from 'eslint-plugin-prettier/recommended';

export async function prettier(): Promise<TypedFlatConfigItem[]> {
  return [recommended];
}
