import { cleanup } from '@testing-library/react';
import { afterAll, describe, test } from 'vitest';

import { Metrika } from '../../../src/next';
import { expectToRender } from '../../assets';

describe('Yandex.Metrika script component', () => {
  test('It renders', () => {
    afterAll(() => cleanup());

    expectToRender(<Metrika id={-1} />);
  });
});
