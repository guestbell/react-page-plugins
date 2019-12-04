import * as React from 'react';
import { RenderElementProps } from 'slate-react';

export const Quote: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case 'quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    default:
      return null;
  }
};
