import { expectAssignable } from 'tsd';
import { describe, test } from 'vitest';

import { pipe } from '../../src';
import { assertNotThrowing } from '../assets';

describe('Pipe function', () => {
  const testFn = pipe(Date.parse)
    .pipe(n => new Date(n))
    .pipe(d => d.toDateString())
    .pipe(s => s.split('T'))
    .pipe(([date, time]) => ({ date, time }));

  test('It won`t throw', () => {
    assertNotThrowing(() => testFn('Jan 1, 2024'));
  });

  test('Type inference works just fine', () => {
    const date = testFn('Jan 1, 2024');
    expectAssignable<{ date?: string; time?: string }>(date);
  });
});
