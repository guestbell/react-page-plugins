import * as React from 'react';
import { SlateProps } from '../types/component';
import ErrorBoundaryInline from '../../common/components/errorBoundary/ErrorBoundaryInline';

const Slate: React.SFC<SlateProps> = props => {
  const { readOnly, state, createInitialState, onChange } = props;
  return readOnly ? (
    <ErrorBoundaryInline
      state={state}
      createInitialState={createInitialState}
      onChange={onChange}
      body=""
      hideButton={true}
    >
      <props.Renderer {...props} />
    </ErrorBoundaryInline>
  ) : (
    <ErrorBoundaryInline
      state={state}
      createInitialState={createInitialState}
      onChange={onChange}
    >
      <props.Controls {...props} />
    </ErrorBoundaryInline>
  );
};

export default Slate;
