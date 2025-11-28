import { describe, test } from 'vitest';

import { assertRendering } from '@test/assets';

import { Am } from './component.test-source';

describe('jsxDotNotation HOC', () => {
  test('It renders', () => {
    assertRendering(<Am />);
  });
});
