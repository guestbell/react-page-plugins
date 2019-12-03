import * as React from 'react';

import { BottomToolbar } from '@react-page/ui';
import { DividerControlsProps as DividerControlsCustomProps } from '../types/controls';

type DividerControlsProps = DividerControlsCustomProps;

const DividerDefaultControls: React.SFC<DividerControlsProps> = props => {
  const { Renderer, readOnly, focused, remove, translations } = props;
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
        >
          {translations.pluginDescription}
        </BottomToolbar>
      )}
    </div>
  );
};

export default DividerDefaultControls;
