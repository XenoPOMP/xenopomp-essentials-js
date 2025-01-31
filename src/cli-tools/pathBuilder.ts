import path from 'node:path';

export class PathBuilder {
  private paths: string[] = [];

  appSource(): PathBuilder {
    this.paths.push(
      path.join(path.dirname(require.main?.filename ?? ''), '../'),
    );

    return this;
  }

  cwd(): PathBuilder {
    this.paths.push(process.cwd());
    return this;
  }

  build(): string {
    return path.join(...this.paths);
  }
}
