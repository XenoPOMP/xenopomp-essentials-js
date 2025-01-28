import type { Fn, ReplaceReturnType } from '../../types';

/**
 * Make any async func synchronous.
 *
 * Return never, if __Func__ is not a function, actually.
 *
 * @since 0.0.1
 * @example
 * type NormalFunc = Synchronous<(one: string, two: number) => void>; // (one: string, two: number) => void
 * type AsyncFunc = Synchronous<(one: string, two: number) => Promise<void>>; // (one: string, two: number) => void
 * type NotAFunc = Synchronous<'sus'>; // never
 */
export type Synchronous<Func> = Func extends Fn
  ? Func extends (...args: any[]) => Promise<infer Result>
    ? ReplaceReturnType<Func, Result>
    : Func
  : never;
