type ObjectEntries<Obj extends object> = Array<[keyof Obj, Obj[keyof Obj]]>;

// declare interface ObjectConstructor {
//   entries<T>(o: { [s: string]: T; } | ArrayLike<T>): [string, T][];
// }
