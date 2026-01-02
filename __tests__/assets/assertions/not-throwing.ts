import { expect } from 'vitest';

import type { PromiseOr } from '@/types';

/** Executes function and expects that it won't throw. */
export const assertNotThrowing = <T = void>(callable: () => PromiseOr<T>) => {
  expect(() => callable()).not.toThrow();
};
