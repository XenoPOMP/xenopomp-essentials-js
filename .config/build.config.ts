import { copyFile } from 'node:fs/promises';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: [
      // Main entry
      './src/index.ts',

      // Type declarations
      {
        builder: 'mkdist',
        input: './src/declarations',
        outDir: './dist/declarations',
      },

      // Next.js
      './src/next/index.ts',
    ],
    outDir: './dist',
    failOnWarn: false,
    declaration: true,
    rollup: {
      esbuild: {
        minify: true,
      },
    },
    hooks: {
      'build:done': async () => {
        await copyFile('./package.json', './dist/package.json');
      },
    },
  },
]);
