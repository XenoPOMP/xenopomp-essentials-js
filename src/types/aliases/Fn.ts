/**
 * Simple alias for creating function types. You can use it for type guards
 * as representation of any function, also you can create cleaner type declarations
 * for functions.
 *
 * @since 0.0.1
 * @example
 * type MyFn = Fn<[a: string, b: string], string>;
 */
export type Fn<Args extends any[] = any[], Res = unknown> = (
  ...args: Args
) => Res;
