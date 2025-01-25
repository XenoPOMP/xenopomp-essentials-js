/**
 * This type stands for empty object type.
 *
 * @example
 * const message: EmptyObject = { type: string; }; // Will cause error.
 */
export type EmptyObject = Record<PropertyKey, never>;
