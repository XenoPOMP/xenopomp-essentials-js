import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/types/index.ts'],
  outDir: './dist/types',
  failOnWarn: false,
  declaration: true,
});
