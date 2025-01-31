import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { describe, expect, test } from 'vitest';

import { PathBuilder } from '@/cli-tools';

describe('PathBuilder class', () => {
  const builder = new PathBuilder();

  test('cwd method works', async () => {
    const res = builder.cwd().build();

    const packageJsonText = await readFile(path.join(res, 'package.json'), {
      encoding: 'utf-8',
    });
    const packageJson = JSON.parse(packageJsonText) as PackageJson;

    expect(packageJson.name).toBe('xenopomp-essentials');
  });

  test.skip('appSource method works', () => {
    const res = builder.appSource().build();
    expect(res).toBe('hero');
  });
});
