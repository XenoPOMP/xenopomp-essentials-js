import type { ComponentProps, ElementType, FC } from 'react';

import type { AsyncFC, WeakOmit } from '@/types';

/**
 * This type wraps ComponentProps<A> to your FC.
 *
 * - __A__  - element type
 * - __P__  - wrapping props
 * - __Ex__ - excluded component props (for example, if you do not want to include 'children' prop in component)
 *
 * @since 0.0.1
 *
 * @example
 * type VariableComponentPropsWithChildren = ComponentProps<VariableFC<'div'>>;
 * type VariableComponentPropsWithoutChildren = ComponentProps<VariableFC<'div', {}, 'children'>>;
 *
 * @example
 * // With children
 * const VariableComponent: VariableFC<'section', { variant?: 'default' }> = ({ variant, ...props }) => {
 *   return <section {...props}></section>
 * }
 *
 * @example
 * // Without children
 * const VariableComponent: VariableFC<'section', { variant?: 'default' }, 'children'> = ({ variant, ...props }) => {
 *   return (
 *    <section {...props}>
 *      <div>Insert your own children</div>
 *    </section>
 *   );
 * }
 */
export type VariableFC<
  A extends ElementType,
  P = unknown,
  Ex extends keyof ComponentProps<A> | undefined = undefined,
> = FC<P & WeakOmit<ComponentProps<A>, Ex>>;

/**
 * Works similar to {@link VariableFC}, but return type is Promise<ReactNode>;
 * @since 0.0.1
 */
export type AsyncVariableFC<
  A extends ElementType,
  P = unknown,
  Ex extends keyof ComponentProps<A> | undefined = undefined,
> = AsyncFC<P & WeakOmit<ComponentProps<A>, Ex>>;
