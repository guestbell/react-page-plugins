import * as React from 'react';
import { DividerProps } from '../types/component';

const Divider: React.SFC<DividerProps> = props => {
  const { readOnly } = props;
  return readOnly ? (
    <props.Renderer {...props} />
  ) : (
    <props.Controls {...props} />
  );
};

export default Divider;
