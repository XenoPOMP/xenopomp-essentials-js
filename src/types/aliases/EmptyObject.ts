/**
 * This type stands for empty object type.
 *
 * @since 0.0.1
 * @example
 * const message: EmptyObject = { type: string; }; // Will cause error.
 */
export type EmptyObject = Record<PropertyKey, never>;
