/**
 * Creates pipelines of functions that will be executed only
 * when you will call whole pipeline.
 *
 * @param fn
 *
 * @example
 * const stringToDateAndTime = pipe(Date.parse)
 *   .pipe(n => new Date(n))
 *   .pipe(d => d.toDateString())
 *   .pipe(s => s.split('T'))
 *   .pipe(([date, time]) => ({ date, time }));
 *
 * const res = stringToDateAndTime('Jan 1, 2024');
 * //     ^? {   date: string | undefined; time: string | undefined }
 *
 * @see https://youtu.be/bH61wRMqp-o?si=D-2Az-_dUFBxG9HG&t=429
 */
export function pipe<A, B>(fn: (a: A) => B) {
  function run(a: A) {
    return fn(a);
  }

  run.pipe = <C>(fn2: (b: B) => C) => pipe((a: A) => fn2(fn(a)));

  return run;
}
