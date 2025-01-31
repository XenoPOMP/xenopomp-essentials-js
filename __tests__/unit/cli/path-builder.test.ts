import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { afterEach, describe, expect, test } from 'vitest';

import { PathBuilder } from '@/cli-tools';

const findPackageJson = async (res: string) => {
  const packageJsonText = await readFile(path.join(res, 'package.json'), {
    encoding: 'utf-8',
  });
  const packageJson = JSON.parse(packageJsonText) as PackageJson;

  expect(packageJson.name).toBe('xenopomp-essentials');
};

describe('PathBuilder class', () => {
  const builder = new PathBuilder();

  afterEach(() => builder.clear());

  test('cwd method works', async () => {
    await findPackageJson(builder.cwd().build());
  });

  test('appSource method works', async () => {
    await findPackageJson(builder.appSource().build());
  });

  test('cd method works', async () => {
    const res = builder.cd('./src').cd('../').build();
    await findPackageJson(res);
  });

  test('file method works', () => {
    const res = builder.cd('./src').cd('../').file('.prettierrc').build();
    expect(res.endsWith('.prettierrc')).toBe(true);
  });
});
