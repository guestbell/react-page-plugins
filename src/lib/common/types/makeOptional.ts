import { Omit } from '../../background/types/omit';
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
