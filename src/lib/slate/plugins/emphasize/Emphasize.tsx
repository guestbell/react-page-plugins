import * as React from 'react';
import { RenderLeafProps } from 'slate-react';
import { EmphasizeTypes } from './emphasizeTypes';

export const Emphasize: React.FC<RenderLeafProps> = ({
  attributes,
  children,
  leaf,
}) => {
  if (leaf[EmphasizeTypes.Bold]) {
    children = <strong>{children}</strong>;
  }
  if (leaf[EmphasizeTypes.Italic]) {
    children = <em>{children}</em>;
  }
  if (leaf[EmphasizeTypes.Underline]) {
    children = <u>{children}</u>;
  }
  return children;
};
