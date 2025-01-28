import type { Dispatch, SetStateAction } from 'react';

/**
 * Type of set state function from useState.
 *
 * @since 0.0.1
 * @example
 * // typeof setState => SetState<string>
 * const [state, setState] = useState<string>('example');
 */
export type SetState<TType> = Dispatch<SetStateAction<TType>>;
