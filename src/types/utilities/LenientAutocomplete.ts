/**
 * This type represent any string, but also saves auto-complete feature.
 *
 * @example
 * type Languages = 'TypeScript' | 'JavaScript';
 *
 * const getLanguageCourse = (lang: LenientAutocomplete<Languages>) => {
 *   // ...
 * };
 *
 * // All cases are totally OK. Also, TS compiler provides
 * // auto-complete feature
 * getLanguageCourse('JavaScript');
 * getLanguageCourse('TypeScript');
 * getLanguageCourse('Rust');
 */
export type LenientAutocomplete<T extends string> = T | (string & {});
