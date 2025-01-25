import { defineBuildConfig } from 'unbuild';

import baseConfig from './build.base.config.ts';

export default defineBuildConfig([
  ...baseConfig,
  {
    name: 'Build types submodule',
    entries: ['./src/types/index.ts'],
    outDir: './dist/types',
  },
]);
