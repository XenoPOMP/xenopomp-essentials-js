type ParamObj<P extends string> = Record<P, string>;

/** Represents Next.js routing params. */
export interface NextParams<P extends string> {
  params: ParamObj<P>;
}

/** Represents Next.js routing search params. */
export interface NextSearchParams<P extends string> {
  searchParams: ParamObj<P>;
}

/** This type describes Next error page params. */
export interface NextErrorParams<E extends Error = any> {
  error: E;
  reset: () => void;
}
