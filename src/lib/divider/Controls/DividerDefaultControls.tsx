import * as React from 'react';

import { DividerControlsProps as DividerControlsCustomProps } from '../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

type DividerControlsProps = DividerControlsCustomProps;

const DividerDefaultControls: React.SFC<DividerControlsProps> = props => {
  const { Renderer, readOnly, focused, remove } = props;
  return (
    <div className="dividerControls ory-prevent-blur">
      <Renderer {...props} />
      {!readOnly && focused && (
        <BottomToolbar
          icon={props.IconComponent}
          open={props.focused}
          title={props.translations.pluginName}
          onDelete={remove}
          {...props}
          theme={props.theme}
        />
      )}
    </div>
  );
};

export default DividerDefaultControls;
