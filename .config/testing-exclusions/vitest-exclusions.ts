import { configDefaults } from 'vitest/config';

export const vitestExclusions: string[] = [
  ...configDefaults.exclude,
  '.config',
  '__tests__/{assets,data}',
  '__tests__/**/*.test-source.*',
];
