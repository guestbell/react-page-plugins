import * as React from 'react';
export interface BasicProps {}

export interface BasicState {}

export class Basic extends React.PureComponent<BasicProps, BasicState> {
  public render() {
    return <div className="container">Test</div>;
  }
}

export default Basic;
