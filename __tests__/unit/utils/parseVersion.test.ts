import { describe, test } from 'vitest';

import { parseVersion } from '@/utils';
import type { VersionData } from '@/utils';

import { assertNotThrowing, expectToDeepEqual } from '@test/assets';
import { testCases } from '@test/data';

describe('parseVersion util', () => {
  const testParseVersion = (raw: string, expected: VersionData) => {
    expectToDeepEqual(parseVersion(raw), expected);
  };

  test('It does not throw', () => assertNotThrowing(() => parseVersion('')));

  test.each(testCases)(
    'Test case: input=$input, version=$version, preid=$preid, prerelease=$prerelease',
    ({ input, ...versionData }) => {
      testParseVersion(input, versionData);
    },
  );
});
