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
import { Node } from 'slate';
import { slateEmptyValue } from '../../../../lib/common/components/slateEditor/slateEmptyValue';

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.REACT_APP_TRACE_UPDATES
) {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

// tslint:disable-next-line:no-any
const KeepStateEditor = ({ value, ...props }: any) => {
  const [state, setState] = React.useState(value);
  return <Editor {...props} value={state} onChange={setState} />;
};
export interface BasicProps {}

export interface BasicState {}

export const Basic: React.FC<BasicProps> = props => {
  const [value, setValue] = React.useState<Node[]>(slateEmptyValue);
  const onChange: SlateEditorOnChangeHandler = val => setValue(val.value);
  return (
    <div className="container">
      <SlateEditor
        value={value}
        onChange={onChange}
        placeholder="Custom placeholder"
        label="Slate editor"
        maxChars={100}
      />
      <KeepStateEditor
        plugins={plugins}
        value={contents}
        // onChange={s => console.log('on change, new state', s)}
      />
    </div>
  );
};

export default Basic;
