import { describe, expect, test } from 'vitest';

import { capitalize, uncapitalize } from '../../../src';

describe('Capitalize/uncapitalize utilities', () => {
  test('Capitalize works', () => {
    const og = 'alex';
    const cap = capitalize(og);
    expect(cap).toBe('Alex');
  });

  test('Uncapitalize works', () => {
    const og = 'Alex';
    const cap = uncapitalize(og);
    expect(cap).toBe('alex');
  });
});
