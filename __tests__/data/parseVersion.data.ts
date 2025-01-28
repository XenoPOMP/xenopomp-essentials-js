import type { VersionData } from '../../src';

export const testCases: Array<VersionData & { input: string }> = [
  {
    input: 'Random string',
    version: null,
    preid: undefined,
    prerelease: undefined,
  },
  {
    input: '0.0.0',
    version: '0.0.0',
    prerelease: undefined,
    preid: undefined,
  },
  {
    input: '0.0.0-alpha.0',
    version: '0.0.0',
    preid: 'alpha',
    prerelease: '0',
  },
  {
    input: '0.0.0-beta.0',
    version: '0.0.0',
    preid: 'beta',
    prerelease: '0',
  },
  {
    input: '0.0.0-rc.0',
    version: '0.0.0',
    preid: 'rc',
    prerelease: '0',
  },
  {
    input: '0.0.0-rc.1',
    version: '0.0.0',
    preid: 'rc',
    prerelease: '1',
  },
  {
    input: '0.0.0-rc.25',
    version: '0.0.0',
    preid: 'rc',
    prerelease: '25',
  },
  {
    input: '0.0.0-canary.0',
    version: '0.0.0',
    preid: 'canary',
    prerelease: '0',
  },
];
