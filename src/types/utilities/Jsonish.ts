import type { Jsonifiable } from 'type-fest';

/**
 * Return never if type does not match JSON schema.
 *
 * @since 0.0.1
 * @example
 * type Schema = Jsonish<{ sus: string; am: string; }>; // OK
 * type AlterSchema = Jsonish<{ sus: string; am: () => {}; }>; // Causes error
 */
export type Jsonish<T extends Jsonifiable> = T extends Jsonifiable ? T : never;
