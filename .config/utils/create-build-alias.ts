import path from 'node:path';

/**
 * Creates path for alias resolving, starting from root dir.
 * @param alias
 * @param segments
 */
export const createBuildAlias = (alias: string, ...segments: string[]) => {
  return {
    [alias]: path.resolve(__dirname, '../', ...segments),
  };
};
