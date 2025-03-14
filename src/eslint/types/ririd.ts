import type ririd from '@ririd/eslint-config';

import type { Defined } from '@/types';

export type RiridParams = Parameters<typeof ririd>;
export type RiridOptions = Defined<RiridParams[0]>;
export type UserConfig = Defined<RiridParams[1]>;
