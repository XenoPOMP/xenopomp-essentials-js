import type { PartialDeep } from 'type-fest';
import { vi } from 'vitest';

import type { Stub } from '@test/assets';

/**
 * Mocks global scope object.
 *
 * @param name
 * @param stub
 *
 * @example
 * stubGlobal<typeof navigator>('navigator', {
 *     clipboard: {
 *       writeText: async (text: string) => vi.fn(),
 *     },
 * });
 */
export const stubGlobal = <Global extends object>(
  name: string,
  stub: PartialDeep<Stub<Global>>,
) => {
  vi.stubGlobal(name, stub);
};
