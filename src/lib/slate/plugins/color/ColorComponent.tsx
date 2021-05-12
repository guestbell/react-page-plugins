import * as React from 'react';
import { RenderLeafProps } from 'slate-react';

export const ColorComponent: React.FC<RenderLeafProps> = ({
  attributes,
  children,
  leaf,
}) => {
  if (leaf.color) {
    const color = leaf.color;
    children = (
      <span
        style={{ color: `rgba(${color.r},${color.g},${color.b},${color.a})` }}
      >
        {children}
      </span>
    );
  }
  return children;
};
