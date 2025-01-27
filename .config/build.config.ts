import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: [
      './src/index.ts',
      {
        builder: 'mkdist',
        input: './src/declarations',
        outDir: './dist/declarations',
      },
    ],
    outDir: './dist',
    failOnWarn: false,
    declaration: true,
    rollup: {
      esbuild: {
        minify: true,
      },
    },
  },
]);
