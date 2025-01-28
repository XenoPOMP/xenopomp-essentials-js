import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { istanbulExclusions, vitestExclusions } from './testing-exclusions';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: vitestExclusions,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
      exclude: [...vitestExclusions, ...istanbulExclusions],
    },
    globals: true,
    setupFiles: '.config/setup.vitest.ts',
  },
});
