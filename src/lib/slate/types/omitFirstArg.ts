export type omitFirstArg<F> = F extends (
  x: unknown,
  ...args: infer P
) => infer R
  ? (...args: P) => R
  : never;
