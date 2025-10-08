/**
 * Constraints number with min and max values.
 *
 * @example Min value
 * console.log({
 *   ogNum: 1, // 1
 *   minmax: minmax(1, [2, undefined]), // 2
 * });
 *
 * @example Max value
 * console.log({
 *   ogNum: 1001, // 1001
 *   minmax: minmax(1001, [undefined, 900]), // 900
 * });
 *
 * @example Min and max value
 * console.log({
 *   ogNum: 600, // 600
 *   minmax: minmax(1001, [2, 900]), // 600
 * });
 */
export const minmax = (
  num: number,
  [min, max]: [min: number | undefined, max: number | undefined],
) => {
  if (!!min && num <= min) {
    return min;
  }

  if (!!max && num >= max) {
    return max;
  }

  return num;
};
