import * as React from 'react';
import { RenderElementProps } from 'slate-react';

export const Link: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return null;
  }
};
