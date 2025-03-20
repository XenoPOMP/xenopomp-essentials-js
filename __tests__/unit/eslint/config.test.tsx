import { expectType } from 'tsd';
import { describe, expect, test } from 'vitest';

import type { Configs, Options, UserConfigItem } from '@/eslint';
import xenopomp from '@/eslint';
import { next } from '@/eslint/configs';
import type { Fn } from '@/types';

import { assertNotThrowing } from '@test/assets';

type ExpectedType = Fn<
  [options?: Options, ...userConfigs: UserConfigItem[]],
  Configs
>;

describe('xenopomp ESLint config', () => {
  test('Expected types are not any', () => {
    expectType<ExpectedType>(xenopomp);
  });

  test('It does not throw', () => {
    assertNotThrowing(() => xenopomp());

    assertNotThrowing(() =>
      xenopomp({
        react: undefined,
      }),
    );

    assertNotThrowing(() =>
      xenopomp({
        next: true,
      }),
    );
  });

  test('Next.js integration', async () => {
    const config = await next();
    expect(config.length).toBeGreaterThan(0);
  });
});
