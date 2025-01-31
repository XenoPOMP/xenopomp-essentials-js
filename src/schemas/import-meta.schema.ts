import { z } from 'zod';

const importMetaSchema = z.object({
  dirname: z.string().min(1),
});

export const importMeta = importMetaSchema.parse(import.meta);
