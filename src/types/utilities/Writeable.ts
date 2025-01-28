/**
 * Removes readonly from type.
 * @since 0.0.1
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Removes readonly from type deeply.
 * @since 0.0.1
 */
export type DeepWriteable<T> = {
  -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
