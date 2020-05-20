import * as React from 'react';
import { DividerRendererProps } from '../types/renderer';
import PaddingComponent from '../../common/utils/PaddingComponent';

const DividerHtmlRenderer: React.SFC<DividerRendererProps> = props => {
  return (
    <PaddingComponent state={props.state}>
      <hr className="ory-plugins-content-divider" />
    </PaddingComponent>
  );
};

export default DividerHtmlRenderer;
