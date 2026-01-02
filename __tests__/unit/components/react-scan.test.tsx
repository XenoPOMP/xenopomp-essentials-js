import React from 'react';
import { describe, test } from 'vitest';

import { ReactScan } from '@/next';

import { assertRendering } from '@test/assets';

describe('react-scan script', () => {
  test('It renders', () => assertRendering(<ReactScan />));
});
