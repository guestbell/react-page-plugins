import * as React from 'react';
import { SlateRendererProps } from '../types/renderer';
import { withReact, Slate, Editable } from 'slate-react';
import { createEditor } from 'slate';

const SlateHtmlRenderer: React.FC<SlateRendererProps> = props => {
  const editor = React.useMemo(() => withReact(createEditor()), []);
  return (
    <Slate
      editor={editor}
      defaultValue={props.state.slateState}
      // onChange={state => props.onChange({ slateState: state })}
    >
      <Editable readOnly={true} />
      {props.controls}
    </Slate>
  );
};

export default SlateHtmlRenderer;
