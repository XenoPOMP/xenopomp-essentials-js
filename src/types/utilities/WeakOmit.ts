import { AnyObject } from '@/types';

/**
 * Allows to pass undefined as Omit`s generic. Weakly omits type.
 *
 * @example
 * // Will not omit any keys
 * type Lib = WeakOmit<{ bookCount: number; date: string }, undefined>;
 *
 * // Will omit
 * type LibStrong = WeakOmit<{ bookCount: number; date: string }, 'date'>;
 */
export type WeakOmit<
  Obj extends AnyObject,
  Keys extends keyof Obj | undefined = undefined,
> = Keys extends keyof Obj ? Omit<Obj, Keys> : Obj;
