import '@react-page/core/lib/index.css'; // we also want to load the stylesheets
import Editor from '@react-page/editor';
import '@react-page/ui/lib/index.css';
import * as React from 'react';
// The content state
import contents from './contents';
import { plugins } from './plugins';
import './styles.scss';

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

export class Basic extends React.PureComponent<BasicProps, BasicState> {
  public render() {
    return (
      <div className="container">
        <KeepStateEditor
          plugins={plugins}
          value={contents}
          // onChange={s => console.log('on change, new state', s)}
        />
      </div>
    );
  }
}

export default Basic;
