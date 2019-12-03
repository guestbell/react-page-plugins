import * as React from 'react';
import { RenderElementProps } from 'slate-react';

export const Paragraph: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  return <p {...attributes}>{children}</p>;
};
