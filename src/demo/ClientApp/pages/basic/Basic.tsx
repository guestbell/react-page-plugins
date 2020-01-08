import '@react-page/core/lib/index.css'; // we also want to load the stylesheets
import Editor from '@react-page/editor';
import '@react-page/ui/lib/index.css';
import * as React from 'react';
// The content state
import contents from './contents';
import { plugins } from './plugins';
import './styles.scss';
import SlateEditor, {
  SlateEditorOnChangeHandler,
} from '../../../../lib/common/components/slateEditor/SlateEditor';
import { slateEmptyValue } from '../../../../lib/common/components/slateEditor/slateEmptyValue';
import SlateRenderer from '../../../../lib/common/components/slateRenderer/SlateRenderer';
import rules from '../../../../lib/common/components/slateRenderer/rules';
import { Button } from 'guestbell-forms/build/components/button/Button';
import migrations from '../../../../lib/common/slateMigrations/migrations';

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.REACT_APP_TRACE_UPDATES
) {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

// tslint:disable-next-line:no-any
/*const KeepStateEditor = ({ value, ...props }: any) => {
  const [state, setState] = React.useState(value);
  return <Editor {...props} value={state} onChange={setState} />;
};*/

export interface BasicProps {}

export const Basic: React.FC<BasicProps> = props => {
  // tslint:disable-next-line: no-any
  const [value, setValue] = React.useState<any>([
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
  const [content, setContent] = React.useState(contents);
  return (
    <div className="container">
      <SlateEditor
        value={value}
        onChange={onChange}
        placeholder="Custom placeholder"
        label="Slate editor"
        maxChars={100}
        migrations={migrations}
      />
      {false && <pre>{JSON.stringify(value, null, 1)}</pre>}
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
      <Editor
        plugins={plugins}
        value={content}
        defaultPlugin={plugins.content.find(
          c => c.name === 'ory/editor/core/content/slate'
        )}
        onChange={s => setContent(s)}
      />
      {/*<pre>{JSON.stringify(content, null, 2)}</pre>*/}
    </div>
  );
};

export default Basic;
