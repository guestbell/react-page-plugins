import * as React from 'react';
import { SlateRendererProps } from '../types/renderer';
import SlateRenderer from '../../common/components/slateRenderer/SlateRenderer';
import rules from '../../common/components/slateRenderer/rules';
import migrations from '../../common/slateMigrations/migrations';
import PaddingComponent from '../../common/utils/PaddingComponent';
import SlateEditor, {
  SlateEditorOnChangeHandler,
} from '../../common/components/slateEditor/SlateEditor';

const SlateHtmlRenderer: React.FC<SlateRendererProps> = props => {
  const {
    onChange,
    data: { value, version } = {},
    toolbarButtons,
    hoverButtons,
  } = props;
  const onChangeInternal = React.useCallback<SlateEditorOnChangeHandler>(
    ({ value }) => onChange({ value }),
    [onChange]
  );
  return !(props.isEditMode && props.focused) ? (
    <PaddingComponent state={props.data}>
      <SlateRenderer
        value={value}
        nodeRule={rules.nodeRule}
        textRule={rules.textRule}
        version={version}
        migrations={migrations}
      />
    </PaddingComponent>
  ) : (
    <SlateEditor
      value={props.data.value}
      onChange={onChangeInternal}
      version={version}
      migrations={migrations}
      toolbarButtons={toolbarButtons}
      hoverButtons={hoverButtons}
    />
  );
};

export default SlateHtmlRenderer;
