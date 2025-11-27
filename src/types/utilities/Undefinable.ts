/**
 * Makes type union of type T and undefined
 * @since 0.0.1
 * @deprecated Renamed to {@link Optional}.
 */
export type Undefinable<T> = T | undefined;

/**
 * Marks type as optional (undefinable).
 */
export type Optional<T> = T | undefined;
