import path from 'node:path';

import { importMeta } from '@/schemas';

export class PathBuilder {
  private paths: string[] = [];

  private pushPaths(...paths: string[]): PathBuilder {
    this.paths.push(...paths);
    return this;
  }

  cd(...paths: string[]) {
    return this.pushPaths(...paths);
  }

  appSource(): PathBuilder {
    return this.pushPaths(path.join(path.dirname(importMeta.dirname), '../'));
  }

  cwd(): PathBuilder {
    return this.pushPaths(process.cwd());
  }

  clear(): PathBuilder {
    this.paths = [];
    return this;
  }

  build(): string {
    return path.join(...this.paths);
  }
}
