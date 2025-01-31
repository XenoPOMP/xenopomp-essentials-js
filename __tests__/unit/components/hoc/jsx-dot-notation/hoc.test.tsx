import { describe, test } from 'vitest';

import { expectToRender } from '@test/assets';

import { Am } from './component.test-source';

describe('jsxDotNotation HOC', () => {
  test('It renders', () => {
    expectToRender(<Am />);
  });
});
