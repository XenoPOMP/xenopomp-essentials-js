import { AnyObject } from '@/types';

type ObjectEntries<Obj extends AnyObject> = Array<[keyof Obj, Obj[keyof Obj]]>;

declare interface ObjectConstructor {
  // entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

  entries<T>(o: { [s: string]: T } | ArrayLike<T>): ObjectEntries<typeof o>;
}
