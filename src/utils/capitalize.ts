/**
 * Capitalizes string (makes first letter uppercase).
 * @since 0.0.1
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}

/**
 * Un-capitalizes string (makes first letter lowercase).
 * @since 0.0.1
 */
export function uncapitalize<T extends string>(str: T): Uncapitalize<T> {
  return (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<T>;
}
