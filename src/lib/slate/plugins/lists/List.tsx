import * as React from 'react';
import { RenderElementProps } from 'slate-react';
import { ListTypes } from './withLists';

export const List: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case ListTypes.UL:
      return (
        <ul {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </ul>
      );
    case ListTypes.OL:
      return (
        <ol {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </ol>
      );
    case ListTypes.LI:
      return (
        <li {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </li>
      );
    default:
      return null;
  }
};
