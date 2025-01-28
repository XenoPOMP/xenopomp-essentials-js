import React from 'react';
import { describe, test } from 'vitest';

import { ReactScan } from '../../../src';
import { expectToRender } from '../../assets';

describe('react-scan script', () => {
  test('It renders', () => expectToRender(<ReactScan />));
});
