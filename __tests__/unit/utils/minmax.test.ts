import { describe, expect, test } from 'vitest';

import { minmax } from '@/utils';

describe('minmax util', () => {
  test('Min value', () => {
    expect(minmax(1, [2, undefined])).toBe(2);
  });

  test('Max value', () => {
    expect(minmax(1001, [undefined, 900])).toBe(900);
  });

  test('Min/Max', () => {
    const constraint = (num: number) => minmax(num, [100, 500]);

    expect(constraint(1)).toBe(100);
    expect(constraint(352)).toBe(352);
    expect(constraint(1000)).toBe(500);
  });
});
