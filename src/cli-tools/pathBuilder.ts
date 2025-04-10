import path from 'node:path';

import { importMeta } from '@/schemas';

/**
 * Fluent interface for creating paths of application.
 *
 * @since 0.0.1
 *
 * @example
 * import { PathBuilder } from 'xenopomp-essentials/cli-tools';
 *
 * const builder = new PathBuilder();
 *
 * const res = builder
 *  .appSource()
 *  .cd('./dist/src')
 *  .file('.prettierrc')
 *  .build();
 *
 *  console.log(res); //? C:/Projects/example/node_modules/xenopomp-essentials/dist/src/.prettierrc
 */
export class PathBuilder {
  private paths: string[] = [];

  private pushPaths(...paths: string[]): PathBuilder {
    this.paths.push(...paths);
    return this;
  }

  /**
   * Pushes any custom paths to builder.
   * @since 0.0.1
   * @param paths
   */
  cd(...paths: string[]) {
    return this.pushPaths(...paths);
  }

  /**
   * Pushes filename to paths.
   * @since 0.0.1
   * @param fileName
   */
  file<T extends `${string}.${string}`>(fileName: T) {
    return this.pushPaths(`./${fileName}`);
  }

  /**
   * Pushes path to compiled app directory.
   * Is useful for cli tools that have to access files inside their bundles.
   *
   * It probably may take no effect (if import.meta is not available in a scope).
   * If it is, will push cwd.
   *
   * @since 0.0.1
   */
  appSource(): PathBuilder {
    if (!importMeta.dirname) {
      return this.cwd();
    }

    return this.pushPaths(path.join(path.dirname(importMeta.dirname), '../'));
  }

  /**
   * Gets path of directory where script is running. In cli tools it access
   * path, where cli tool was started.
   * @since 0.0.1
   */
  cwd(): PathBuilder {
    return this.pushPaths(process.cwd());
  }

  /**
   * @since 0.0.1
   */
  clear(): PathBuilder {
    this.paths = [];
    return this;
  }

  /**
   * @since 0.0.1
   */
  build(): string {
    return path.join(...this.paths);
  }
}
