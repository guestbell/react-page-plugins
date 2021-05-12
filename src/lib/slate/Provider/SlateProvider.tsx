import * as React from 'react';

export interface SlateProviderProps {}

const SlateProvider: React.FC<SlateProviderProps> = props => {
  return <>{props.children}</>;
};

export default SlateProvider;
