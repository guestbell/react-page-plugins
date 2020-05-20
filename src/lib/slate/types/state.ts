import { SlateValue } from '../../common/types/slate/SlateValue';
import { PaddingState } from '../../common/types/padding/PaddingState';

export interface SlateState extends PaddingState {
  value: SlateValue;
  version: number;
}
