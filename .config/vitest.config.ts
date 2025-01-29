import react from '@vitejs/plugin-react';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import { istanbulExclusions, vitestExclusions } from './testing-exclusions';

export default defineConfig({
  plugins: [react(), tsconfigPathsPlugin()],
  test: {
    environment: 'jsdom',
    exclude: vitestExclusions,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
      exclude: [...vitestExclusions, ...istanbulExclusions],
    },
  },
});
