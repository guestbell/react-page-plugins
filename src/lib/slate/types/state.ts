import { SlateValue } from '../../common/types/slate/SlateValue';
import { PaddingState } from '../../common/types/padding/PaddingState';

export type SlateState = PaddingState & {
  value: SlateValue;
  version: number;
};
