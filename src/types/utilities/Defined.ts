/**
 * Removes undefined from union type.
 * @since 0.0.1
 * @deprecated Use {@link NonNullable} instead.
 */
export type Defined<T> = Exclude<T, undefined>;
