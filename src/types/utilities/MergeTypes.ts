import type { EmptyObject } from '@/types';

/**
 * Merge array of types to one type.
 * @since 0.0.1
 */
export type MergeTypes<
  TypesArray extends any[],
  Res = EmptyObject,
> = TypesArray extends [infer Head, ...infer Rem]
  ? MergeTypes<Rem, Res & Head>
  : Res;
