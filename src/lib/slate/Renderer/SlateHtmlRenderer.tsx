import * as React from 'react';
import { SlateRendererProps } from '../types/renderer';
import SlateRenderer from '../../common/components/slateRenderer/SlateRenderer';
import rules from '../../common/components/slateRenderer/rules';
import migrations from '../../common/slateMigrations/migrations';

const SlateHtmlRenderer: React.FC<SlateRendererProps> = props => {
  return (
    <SlateRenderer
      value={props.state.value}
      nodeRule={rules.nodeRule}
      textRule={rules.textRule}
      version={props.state.version}
      migrations={migrations}
    />
  );
};

export default SlateHtmlRenderer;
