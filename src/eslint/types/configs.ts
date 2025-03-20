import type { antfu } from '@antfu/eslint-config';

export type UserConfigItem = Parameters<typeof antfu>[1];
export type Configs = ReturnType<typeof antfu>;
