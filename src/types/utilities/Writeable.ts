/**
 * Removes readonly from type.
 * @since 0.0.1
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * @deprecated Use {@link WriteableDeep} instead.
 */
type DeepWriteable<T> = WriteableDeep<T>;

/**
 * Removes readonly from type deeply.
 * @since 0.0.1
 */
export type WriteableDeep<T> = {
  -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
