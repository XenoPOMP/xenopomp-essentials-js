/**
 * Works as Partial, but makes only specified keys partial.
 *
 * @since 0.0.1
 * @example
 * type Super = SelectivePartial<{
 *  name: string;
 *  address: {
 *    street: string;
 *    number: number
 *  }
 * }, 'address'>;
 *
 * // Property 'address' will be partial.
 */
export type SelectivePartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
