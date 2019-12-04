import * as React from 'react';
import { SlateProps } from '../types/component';

const Slate: React.SFC<SlateProps> = props => {
  const { readOnly } = props;
  return readOnly ? (
    <props.Renderer {...props} />
  ) : (
    <props.Controls {...props} />
  );
};

export default Slate;
