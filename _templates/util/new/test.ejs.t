---
to: __tests__/unit/utils/<%= h.changeCase.camelCase(name) %>.test.ts
---
import { describe, test } from 'vitest';

import { transliterate } from '@/utils';

import { assertNotThrowing } from '@test/assets';

describe('<%= h.changeCase.camelCase(name) %> util', () => {
  test('It does not throw', () => assertNotThrowing(() => <%= h.changeCase.camelCase(name) %>()));
});

