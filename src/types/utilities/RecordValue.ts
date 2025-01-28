/**
 * Get typeof value of Record.
 *
 * @since 0.0.1
 * @example
 * type Value = RecordValue<Record<string, number>>; // number
 */
export type RecordValue<R extends Record<any, any>> =
  R extends Record<any, infer V> ? V : never;
