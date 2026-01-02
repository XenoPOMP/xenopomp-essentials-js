/**
 * Recursevely changes all keys` types inside T to R.
 */
export type TypeReplaceDeep<T extends object, R> = {
  [K in keyof T]: T[K] extends object ? TypeReplaceDeep<T[K], R> : R;
};
