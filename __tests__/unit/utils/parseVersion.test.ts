import { describe, test } from 'vitest';

import { parseVersion } from '../../../src';
import { assertNotThrowing } from '../../assets';

describe('parseVersion util', () => {
  test('It does not throw', () => assertNotThrowing(() => parseVersion('')));
});
