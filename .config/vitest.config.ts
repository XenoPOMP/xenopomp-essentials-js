import { defineConfig } from 'vitest/config';

import { istanbulExclusions, vitestExclusions } from './testing-exclusions';

export default defineConfig({
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
