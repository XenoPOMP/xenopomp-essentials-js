import xenopomp from './src/eslint';
import repoEslintPlugin from './src/repo-eslint-rules';

export default xenopomp(
  {
    // deprecation: 'off',
    // tsconfigPath: './.config/ts/tsconfig.lint.json',
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
