/**
 * Get typeof key of Record.
 *
 * @since 0.0.1
 * @example
 * type Key = RecordKey<Record<string, number>>; // string
 */
export type RecordKey<R extends Record<any, any>> =
  R extends Record<infer K, any> ? K : never;
