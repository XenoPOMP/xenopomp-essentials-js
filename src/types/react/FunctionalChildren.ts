import type { ReactNode } from 'react';

/**
 * This type allows you to make children that can be function.
 *
 * @since 0.0.1
 * @example
 * type Child = FunctionalChildren<[options: string]>;
 * // ReactNode | ((options: string) => ReactNode)
 */
export type FunctionalChildren<Args extends any[]> =
  | ReactNode
  | ((...args: Args) => ReactNode);
