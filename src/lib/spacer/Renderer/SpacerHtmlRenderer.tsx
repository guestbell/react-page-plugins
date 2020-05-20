import * as React from 'react';
import { SpacerHtmlRendererProps } from '../types/renderer';
import { defaultSpacerState } from './../default/state';
import PaddingComponent from '../../common/utils/PaddingComponent';

const SpacerHtmlRenderer: React.SFC<SpacerHtmlRendererProps> = props => {
  const { state: { height } = defaultSpacerState } = props;
  return (
    <PaddingComponent state={props.state}>
      <div style={{ height: `${(height || 0).toString()}px` }} />
    </PaddingComponent>
  );
};

export default SpacerHtmlRenderer;
