import * as React from 'react';
import { RenderElementProps } from 'slate-react';
import { QuoteType } from './quoteType';

export const Quote: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case QuoteType:
      return <blockquote {...attributes}>{children}</blockquote>;
    default:
      return null;
  }
};
