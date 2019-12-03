import * as React from 'react';
import { RenderMarkProps } from 'slate-react';
import { MarkTypes } from './withMarks';

export const Mark: React.FC<RenderMarkProps> = ({
  attributes,
  children,
  mark,
}) => {
  switch (mark.type) {
    case MarkTypes.Bold:
      return <strong {...attributes}>{children}</strong>;
    case MarkTypes.Italic:
      return <em {...attributes}>{children}</em>;
    case MarkTypes.Underline:
      return <u {...attributes}>{children}</u>;
    default:
      return null;
  }
};
