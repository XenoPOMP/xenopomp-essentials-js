import type { FC, ReactNode } from 'react';

import type { ReplaceReturnType } from '@/types';

/**
 * Same as **FC** (or FunctionalComponent), but it returns Promise.
 *
 * @since 0.0.1
 * @example
 * const Header: AsyncFC<HeaderProps> = async ({}) => {
 *   // Do async stuff here...
 *
 *   return <div></div>;
 * };
 */
export type AsyncFC<T = unknown> = ReplaceReturnType<FC<T>, Promise<ReactNode>>;
