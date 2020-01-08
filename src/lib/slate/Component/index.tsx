import * as React from 'react';
import { SlateProps } from '../types/component';
import ErrorBoundaryInline from '../../common/components/errorBoundary/ErrorBoundaryInline';

const Slate: React.SFC<SlateProps> = props => {
  const { readOnly, state, createInitialState, onChange } = props;
  return (
    <ErrorBoundaryInline
      state={state}
      createInitialState={createInitialState}
      onChange={onChange}
    >
      {readOnly ? <props.Renderer {...props} /> : <props.Controls {...props} />}
    </ErrorBoundaryInline>
  );
};

export default Slate;
