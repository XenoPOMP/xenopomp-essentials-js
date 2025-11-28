import { cleanup } from '@testing-library/react';
import { afterAll, describe, test } from 'vitest';

import { Metrika } from '@/next';

import { assertRendering } from '@test/assets';

describe('Yandex.Metrika script component', () => {
  test('It renders', () => {
    afterAll(() => cleanup());

    assertRendering(<Metrika id={-1} />);
  });
});
