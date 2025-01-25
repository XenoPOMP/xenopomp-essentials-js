import { type BuildConfig, defineBuildConfig } from 'unbuild';

const BASE_CONFIG: BuildConfig = {
  outDir: './dist',
  failOnWarn: false,
  declaration: true,
};

export default defineBuildConfig([
  {
    ...BASE_CONFIG,
    name: 'Build types submodule',
    entries: ['./src/types/index.ts'],
  },
]);
