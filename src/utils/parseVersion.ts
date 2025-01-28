import type { LenientAutocomplete, Nullable } from '../types';

export type Preid = 'alpha' | 'beta' | 'rc';

export interface VersionData {
  /** Version in format: (__``x.x.x``__-beta.x) */
  version: Nullable<string>;

  /** Version preid. (x.x.x-__``beta``__.x) */
  preid?: LenientAutocomplete<Preid>;

  /** Number of pre-release. (x.x.x-beta.__``12``__) */
  prerelease?: string;
}

/**
 * Parses version with preid.
 *
 * @since 0.0.1
 *
 * @param raw
 *
 * @example
 * const { version, preid } = parseVersion('0.0.0-beta.0');
 * // version = '0.0.0'
 * // preid = 'beta'
 */
export const parseVersion = (raw: string): VersionData => {
  /** Parsed version. */
  const version = raw.match(/(\d\.){2}\d/gi)?.at(0) || null;
  const preid = raw.match(/(?<=-)\w+(?=\.\d)/gi)?.at(0);
  const prerelease = raw.match(/(?<=((\d\.){2}\d-\w+\.))\d+/gi)?.at(0);

  return {
    version,
    preid,
    prerelease,
  };
};
