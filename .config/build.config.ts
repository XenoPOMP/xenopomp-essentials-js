import { copyFile } from 'node:fs/promises';
import path from 'node:path';
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

      // Modules that are not to be exported from main module
      './src/next/index.ts',
      './src/cli-tools/index.ts',
      './src/eslint/index.ts',

      // Vitest helper functionality
      {
        name: 'vitest/index',
        input: '__tests__/lib.ts',
      },
    ],
    outDir: './dist',
    failOnWarn: false,
    declaration: true,
    clean: true,
    parallel: true,
    alias: {
      '@': path.resolve(__dirname, '../', './src'),
      '@test': path.resolve(__dirname, '../', './__tests__'),
    },
    hooks: {
      'build:done': async () => {
        await copyFile('./package.json', './dist/package.json');
      },
    },
  },
]);

function simpleMinifiedEntry(entry: string): BuildEntry {
  return {
    input: entry,
    esbuild: {
      minify: false,
    },
  };
}
