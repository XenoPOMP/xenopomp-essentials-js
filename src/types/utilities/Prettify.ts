import type { AnyObject } from '@/types';

/**
 * Presents plain object in pretty form.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Presents object in pretty form recursively.
 */
export type PrettifyDeep<T> = {
  [K in keyof T]: T[K] extends AnyObject ? Prettify<PrettifyDeep<T[K]>> : T[K];
};
