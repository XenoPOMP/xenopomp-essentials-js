import { defineConfig, mergeConfig } from 'vitest/config';

import rootConfig from './vitest.config';

const integrityConfig = defineConfig({});

export default mergeConfig(rootConfig, integrityConfig);
