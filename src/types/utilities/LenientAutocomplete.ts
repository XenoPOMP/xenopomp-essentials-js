/**
 * Makes types don`t merging in unions.
 *
 * @since 0.0.1
 * @example
 * type Languages = 'TypeScript' | 'JavaScript' | Lenient<string>;
 * //     ^? "TypeScript" | "JavaScript" | string
 */
export type Lenient<T> = T & {};

/**
 * This type allows any string, but also saves compiler`s autocomplete
 * feature.
 *
 * @since 0.0.1
 * @example
 * type Languages = 'TypeScript' | 'JavaScript';
 *
 * function handleLanguage(lang: LenientAutocomplete<Languages>) {
 *   //                      ^? string (but autocomplete feature is still here)
 *   console.log(lang);
 * }
 */
export type LenientAutocomplete<T extends string> = T | Lenient<string>;
