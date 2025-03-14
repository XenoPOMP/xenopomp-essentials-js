import type { FC } from 'react';

/**
 * Extracts type of props from FC type.
 *
 * @since 0.0.1
 * @example
 * type Props = FcProps<FC<{ align?: boolean }>>;
 * //   ^? { align?: boolean }
 *
 * type VariableProps = FcProps<VariableFC<'button', { notAlign?: boolean }>>;
 * //   ^? {notAlign?: boolean} & Omit<ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, undefined>
 */
export type FcProps<Comp> = Comp extends FC<infer Props> ? Props : never;
