import xenopomp from './src/eslint';
import repoEslintPlugin from './src/repo-eslint-rules';

export default xenopomp(
  {},
  {
    plugins: {
      repo: repoEslintPlugin,
    },
    rules: {
      'repo/deep-type-naming': 'error',
    },
  },
);
