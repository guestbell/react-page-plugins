import * as React from 'react';
import { RenderElementProps } from 'slate-react';

type allHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case 'heading':
      const Tag: allHeadingLevels = ('h' + element.level) as allHeadingLevels;
      return <Tag {...attributes}>{children}</Tag>;
    default:
      return null;
  }
};
