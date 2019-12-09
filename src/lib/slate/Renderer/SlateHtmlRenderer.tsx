import * as React from 'react';
import { SlateRendererProps } from '../types/renderer';
import SlateRenderer from '../../common/components/slateRenderer/SlateRenderer';
import rules from '../../common/components/slateRenderer/rules';

const SlateHtmlRenderer: React.FC<SlateRendererProps> = props => {
  return (
    <SlateRenderer
      value={props.state.value}
      nodeRule={rules.nodeRule}
      textRule={rules.textRule}
    />
  );
};

export default SlateHtmlRenderer;
