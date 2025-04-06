import type { FC } from 'react';

import type { EmptyObject } from '@/types';

/**
 * Creates properly type object with jsxDotNotation.
 *
 * @param comp
 * @param rest
 *
 * @example
 * const FlexComp: FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;
 * const FlexRow: FC<PropsWithChildren & { short?: boolean }> = ({ children }) => (
 *   <div>{children}</div>
 * );
 * const FlexCol: FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;
 *
 * const Flex = jsxDotNotation(FlexComp, {
 *   Row: FlexRow,
 *   Col: FlexCol,
 * });
 *
 * const Am = () => {
 *   return (
 *     <Flex>
 *       <Flex.Row short>
 *         <Flex.Col></Flex.Col>
 *       </Flex.Row>
 *     </Flex>
 *   );
 * };
 */
export function jsxDotNotation<
  Props = EmptyObject,
  Rest extends Record<string, FC<any>> = EmptyObject,
>(comp: FC<Props>, rest: Rest) {
  return Object.assign(comp, rest);
}
