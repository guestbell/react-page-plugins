// import '@react-page/core/lib/index.css'; // we also want to load the stylesheets
import Editor from '@react-page/editor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// The content state
import { contents } from './contents';
import { cellPlugins } from './plugins';
// import './styles.css';

// tslint:disable-next-line:no-any
const KeepStateEditor = ({ value, ...props }: any) => {
  const [state, setState] = React.useState(value);
  // here you would normally persist the state somewhere (e.g a database)
  // <Editor /> is stateful, so you don't nesseary have to keep the value updated
  // if you do, you have to guarantee that the value is referencially equal to what has been passed by `onChange`
  // or the editor will blur its fields (and other problems)
  return (
    <Editor
      {...props}
      allowResizeInEditMode={true}
      allowMoveInEditMode={true}
      value={state}
      onChange={setState}
    />
  );
};
// Render the editables - the areas that are editable
const elements = document.querySelectorAll<HTMLDivElement>('.editable');
elements.forEach((element, index) => {
  ReactDOM.render(
    <KeepStateEditor
      plugins={cellPlugins}
      value={contents[index]}
      // onChange={s => console.log('on change, new state', s)}
    />,
    element
  );
});

// Render as beautified mark up (html)
ReactDOM.render(
  <Editor cellPlugins={cellPlugins} value={contents[0]} readOnly={true} />,
  document.getElementById('editable-static')
);
