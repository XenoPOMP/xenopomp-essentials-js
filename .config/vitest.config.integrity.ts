import { defineConfig, mergeConfig } from 'vitest/config';

import rootConfig from './vitest.config';

const integrityConfig = defineConfig({
  test: {
    include: ['__tests__/integrity/**/*.(ts|tsx)'],
  },
});

export default mergeConfig(rootConfig, integrityConfig);
