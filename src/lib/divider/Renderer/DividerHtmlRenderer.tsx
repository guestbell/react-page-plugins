import * as React from 'react';
import { DividerRendererProps } from '../types/renderer';
import PaddingComponent from '../../common/utils/PaddingComponent';

const DividerHtmlRenderer: React.FC<DividerRendererProps> = props => {
  return (
    <PaddingComponent state={props.data}>
      <hr className="ory-plugins-content-divider" />
    </PaddingComponent>
  );
};

export default DividerHtmlRenderer;
