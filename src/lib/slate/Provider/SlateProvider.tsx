import * as React from 'react';

export interface SlateProviderProps {
  children?: React.ReactNode;
}

const SlateProvider: React.FC<SlateProviderProps> = props => {
  return <>{props.children}</>;
};

export default SlateProvider;
