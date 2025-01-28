type ParamObj<P extends string> = Record<P, string>;

/**
 * Represents Next.js routing params.
 * @since 0.0.1
 */
export interface NextParams<P extends string> {
  params: ParamObj<P>;
}

/**
 * Represents Next.js routing search params.
 * @since 0.0.1
 */
export interface NextSearchParams<P extends string> {
  searchParams: ParamObj<P>;
}

/**
 * This type describes Next error page params.
 * @since 0.0.1
 */
export interface NextErrorParams<E extends Error = any> {
  error: E;
  reset: () => void;
}
