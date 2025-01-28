import { describe, test } from 'vitest';

import { type VersionData, parseVersion } from '../../../src';
import { assertNotThrowing, expectToDeepEqual } from '../../assets';
import { testCases } from '../../data/parseVersion.data';

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
