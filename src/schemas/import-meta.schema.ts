import { z } from 'zod';

const importMetaSchema = z.object({
  dirname: z.string().optional(),
});

/**
 * Validates import.meta object.
 *
 * @since 0.0.1
 */
export const importMeta = importMetaSchema.parse(import.meta);
