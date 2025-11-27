import type { PackageJson } from 'type-fest';

import packageJSON from '@/../package.json';
import { parseVersion } from '@/utils';

async function run() {
  const packageJsonTyped = structuredClone(packageJSON) as PackageJson;
  const { version } = packageJsonTyped;

  const { preid } = parseVersion(version!);

  // Tag is not defined.
  if (!preid) {
    console.log('latest');
    return;
  }

  console.log(preid);
}

(async () => {
  await run();
})();
