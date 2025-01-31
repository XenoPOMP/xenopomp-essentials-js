import type { FC, PropsWithChildren } from 'react';

import { jsxDotNotation } from '@/react';

const FlexComp: FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;
const FlexRow: FC<PropsWithChildren & { short?: boolean }> = ({ children }) => (
  <div>{children}</div>
);
const FlexCol: FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;

export const Flex = jsxDotNotation(FlexComp, {
  Row: FlexRow,
  Col: FlexCol,
});

export const Am = () => {
  return (
    <Flex>
      <Flex.Row short>
        <Flex.Col></Flex.Col>
      </Flex.Row>
    </Flex>
  );
};
