import { describe, expect, test } from 'vitest';

import { parseVersion } from '@/utils';
import type { VersionData } from '@/utils';

import { assertNotThrowing } from '@test/assets';
import { testCases } from '@test/data';

describe('parseVersion util', () => {
  const testParseVersion = (raw: string, expected: VersionData) => {
    expect(parseVersion(raw)).to.deep.equal(expected);
  };

  test('It does not throw', () => assertNotThrowing(() => parseVersion('')));

  test.each(testCases)(
    'Test case: input=$input, version=$version, preid=$preid, prerelease=$prerelease',
    ({ input, ...versionData }) => {
      testParseVersion(input, versionData);
    },
  );
});
