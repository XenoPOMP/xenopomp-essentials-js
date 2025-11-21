import type { ComponentProps, ElementType } from 'react';

import type { FCProps, VariableFC } from '@/types';

export type VariableProps<
  A extends ElementType,
  P = unknown,
  Ex extends keyof ComponentProps<A> | undefined = undefined,
> = FCProps<VariableFC<A, P, Ex>>;
