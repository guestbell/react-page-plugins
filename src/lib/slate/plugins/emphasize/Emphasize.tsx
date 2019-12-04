import * as React from 'react';
import { RenderMarkProps } from 'slate-react';
import { EmphasizeTypes } from './withEmphasize';

export const Emphasize: React.FC<RenderMarkProps> = ({
  attributes,
  children,
  mark,
}) => {
  switch (mark.type) {
    case EmphasizeTypes.Bold:
      return <strong {...attributes}>{children}</strong>;
    case EmphasizeTypes.Italic:
      return <em {...attributes}>{children}</em>;
    case EmphasizeTypes.Underline:
      return <u {...attributes}>{children}</u>;
    default:
      return null;
  }
};
