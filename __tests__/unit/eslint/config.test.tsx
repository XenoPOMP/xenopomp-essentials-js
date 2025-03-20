import { expectType } from 'tsd';
import { describe, test } from 'vitest';

import type { Configs, Options, UserConfigItem } from '@/eslint';
import xenopomp from '@/eslint';
import type { Fn } from '@/types';

type ExpectedType = Fn<
  [options?: Options, ...userConfigs: UserConfigItem[]],
  Configs
>;

describe('xenopomp ESLint config', () => {
  test('Expected types are not any', () => {
    expectType<ExpectedType>(xenopomp);
  });
});
