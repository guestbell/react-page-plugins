import * as React from 'react';

import { DividerControlsProps as DividerControlsCustomProps } from '../types/controls';

type DividerControlsProps = DividerControlsCustomProps;

const DividerDefaultControls: React.FC<DividerControlsProps> = props => {
  return <div className="dividerControls ory-prevent-blur" />;
};

export default DividerDefaultControls;
