import xenopomp from './src/eslint';
import repoEslintPlugin from './src/repo-eslint-rules';

export default xenopomp(
  {
    deprecation: 'warn',
    tsconfigPath: './.config/ts/tsconfig.lint.json',
  },
  {
    plugins: {
      repo: repoEslintPlugin,
    },
    rules: {
      'repo/deep-type-naming': 'warn',
    },
  },
);
