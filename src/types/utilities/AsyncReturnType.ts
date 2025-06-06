/**
 * Get return type of function that returns Promise ((...args: any) => Promise<any>).
 *
 * @since 0.0.1
 * @example
 * const doSomething = async (): Promise<string|number> => {
 *   return 'result';
 * }
 *
 * type Something = PromiseReturnType<typeof doSomething>;
 * // string|number
 */
export type AsyncReturnType<F extends (...args: any[]) => Promise<any>> =
  Awaited<ReturnType<F>>;
