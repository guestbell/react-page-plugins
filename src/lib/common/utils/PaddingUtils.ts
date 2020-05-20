import { PaddingState } from '../types/padding/PaddingState';
import * as React from 'react';

const calculateSinglePadding = (val: number) => (val ? `${val}rem` : undefined);

export const calculatePadding = (state: PaddingState): React.CSSProperties => ({
  paddingTop: calculateSinglePadding(state?.above),
  paddingBottom: calculateSinglePadding(state?.below),
});
