import * as React from 'react';
import { PaddingState } from '../types/padding/PaddingState';
import { calculatePadding } from './PaddingUtils';

export interface PaddingComponentProps {
  state: PaddingState;
  children?: React.ReactNode;
}

const paddingComponentBaseClassName = 'paddingComponent';

const PaddingComponent: React.FC<PaddingComponentProps> = props => {
  const { state, children } = props;
  return (
    <div
      className={paddingComponentBaseClassName}
      style={calculatePadding(state)}
    >
      {children}
    </div>
  );
};

export default PaddingComponent;
