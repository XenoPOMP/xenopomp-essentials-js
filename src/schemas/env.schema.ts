import dotenv from 'dotenv';
import { z } from 'zod';

// Parse .env into schema
dotenv.config({ quiet: true });

// Create type-safe schema
const envSchema = z.object({
  DISABLE_MINIFY: z.string().transform(arg => arg === 'true'),
});

// Type-safe parsed `process.env` object.
export const env = envSchema.parse(process.env);
