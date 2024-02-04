// Makes all properties of a type optional
export type MakePartial<T> = Partial<T>;

// Creates a new type by removing specified properties
export type OmitAType<T, K extends keyof T> = Omit<T, K>;

// Creates a new type by picking specific properties
export type PickAType<T, K extends keyof T> = Pick<T, K>;

// Makes all properties of a type required
export type MakeRequired<T> = Required<T>;

// Makes all properties of a type readonly
export type MakeReadonly<T> = Readonly<T>;

// Creates a new type with specified keys and a uniform value type
export type MakeRecord<K extends keyof any, T> = Record<K, T>;

// Excludes specified properties from a type
export type ExcludeProps<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

// Extracts the parameter types of a function type
export type FunctionParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// Extracts the return type of a function type
export type FunctionReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
