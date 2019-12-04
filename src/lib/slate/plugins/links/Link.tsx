import * as React from 'react';
import { RenderElementProps } from 'slate-react';
import { LinkType } from './withLinks';

export const Link: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case LinkType:
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return null;
  }
};
