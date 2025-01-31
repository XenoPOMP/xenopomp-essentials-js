import { describe, expect, test } from 'vitest';

import { transliterate } from '@/utils';

import { assertNotThrowing } from '@test/assets';

describe('transliterate util', () => {
  test('It does not throw', () =>
    assertNotThrowing(() => transliterate('Я русский')));

  test('It correctly transliterates text', () => {
    expect(transliterate('Я русский')).toBe('Ya russkiy');
    expect(transliterate('Ya betonovaya милашка')).toBe(
      'Ya betonovaya milashka',
    );
  });
});
