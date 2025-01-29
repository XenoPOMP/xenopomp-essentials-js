import type { AnyObject } from '@/types';

/**
 * Recursevely add some type inside all keys of target type.
 *
 * @since 0.0.1
 * @example
 * type Sups = DeepInject<{ supa: { sups: number } }, { _ignore: boolean }>;
 * const asp: Sups = { supa: { sups: 1, _ignore: false }, _ignore: false };
 */
export type DeepInject<T, I extends AnyObject> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? T[K] & I & DeepInject<T[K], I>
        : T[K];
    } & I
  : T;
