import { describe, test } from 'vitest';

import { injectMatchMediaMock } from '@/../dist/vitest';

describe('MatchMediaMock is transpiled properly', () => {
  injectMatchMediaMock();

  test('It works!', () => {
    // eslint-disable-next-line no-console
    console.debug('It works!');
  });
});
