/**
 * Removes undefined from union type.
 * @since 0.0.1
 */
export type Defined<T> = Exclude<T, undefined>;
