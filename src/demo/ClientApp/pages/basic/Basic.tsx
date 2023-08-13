import * as React from 'react';
// The content state
import { contents } from './contents';
import { cellPlugins } from './plugins';
import './styles.scss';
import SlateEditor, {
  SlateEditorOnChangeHandler,
} from '../../../../lib/common/components/slateEditor/SlateEditor';
import { slateEmptyValue } from '../../../../lib/common/components/slateEditor/slateEmptyValue';
import SlateRenderer from '../../../../lib/common/components/slateRenderer/SlateRenderer';
import rules from '../../../../lib/common/components/slateRenderer/rules';
import { Button } from 'guestbell-forms/build/components/button/Button';
import migrations from '../../../../lib/common/slateMigrations/migrations';
import Editor, { ValueWithLegacy } from '@react-page/editor';
import { SlateValue } from '../../../../lib/common/types/slate/SlateValue';
import BottomToolbar from '../../../../lib/common/components/bottomToolbar/BottomToolbar';
import { Components } from '@react-page/editor/lib-es/core/types/components';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import withStyles from '@mui/styles/withStyles';

// tslint:disable-next-line:no-any
/*const KeepStateEditor = ({ value, ...props }: any) => {
  const [state, setState] = React.useState(value);
  return <Editor {...props} value={state} onChange={setState} />;
};*/

const MoveIcon = withStyles({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    // background: 'transparent !important',
    color: 'white',
    // cursor: 'grab !important',
    padding: 2,
  },
})(OpenWithIcon);

export interface BasicProps {}

const components: Components = {
  BottomToolbar: props => <BottomToolbar {...props} />,
  EditModeResizeHandle: props => (
    <MoveIcon className="react-page-cell-draggable-overlay-handle" {...props} />
  ),
};

export const Basic: React.FC<BasicProps> = props => {
  // tslint:disable-next-line: no-any
  const [value, setValue] = React.useState<SlateValue>([
    {
      type: 'PARAGRAPH',
      children: [
        {
          text: '',
        },
      ],
    },
  ]);
  const onChange: SlateEditorOnChangeHandler = val => setValue(val.value);
  const resetValue = () => {
    setValue(slateEmptyValue());
  };
  const [content, setContent] = React.useState<ValueWithLegacy>(contents);
  return (
    <div className="container">
      <SlateEditor
        value={value}
        onChange={onChange}
        placeholder="Custom placeholder"
        label="Slate editor"
        maxChars={100}
        migrations={migrations}
        className="freeStandingEditor"
      />
      {true && <pre>{JSON.stringify(value, null, 1)}</pre>}
      <h3>Pure render</h3>
      <div className="p-3">
        <SlateRenderer
          value={value}
          nodeRule={rules.nodeRule}
          textRule={rules.textRule}
        />
      </div>
      <Button onClick={resetValue} className="mb-3">
        Reset value
      </Button>
      {false && <pre>{JSON.stringify(content, null, 1)}</pre>}
      <Editor
        cellPlugins={cellPlugins}
        value={content}
        onChange={setContent}
        allowMoveInEditMode={true}
        allowResizeInEditMode={true}
        components={components}
      />
      {true && (
        <Editor cellPlugins={cellPlugins} value={content} readOnly={true} />
      )}
      {/*<pre>{JSON.stringify(content, null, 2)}</pre>*/}
    </div>
  );
};

export default Basic;
