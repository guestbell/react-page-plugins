import * as React from 'react';
import { SpacerHtmlRendererProps } from '../types/renderer';
import { defaultSpacerState } from './../default/state';
import PaddingComponent from '../../common/utils/PaddingComponent';
import SpacerResizable from './SpacerResizable';

const SpacerHtmlRenderer: React.FC<SpacerHtmlRendererProps> = props => {
  const { data: { height } = defaultSpacerState } = props;
  return (
    <PaddingComponent state={props.data}>
      {props.isEditMode && props.focused ? (
        <SpacerResizable {...props} />
      ) : (
        <div style={{ height: `${(height || 0).toString()}px` }} />
      )}
    </PaddingComponent>
  );
};

export default SpacerHtmlRenderer;
