---
to: __tests__/unit/utils/<%= h.changeCase.camelCase(name) %>.test.ts
---
import { describe, test } from 'vitest';

import { <%= h.changeCase.camelCase(name) %> } from '../../../src';
import { assertNotThrowing } from '../../assets';

describe('<%= h.changeCase.camelCase(name) %> util', () => {
  test('It does not throw', () => assertNotThrowing(() => <%= h.changeCase.camelCase(name) %>(<%= args %>)));
});

