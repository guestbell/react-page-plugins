import * as React from 'react';
import { RenderElementProps } from 'slate-react';

export const List: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case 'ul':
      return (
        <ul {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </ul>
      );
    case 'ol':
      return (
        <ol {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </ol>
      );
    case 'li':
      return (
        <li {...attributes} style={{ textAlign: element.alignment }}>
          {children}
        </li>
      );
    default:
      return null;
  }
};
