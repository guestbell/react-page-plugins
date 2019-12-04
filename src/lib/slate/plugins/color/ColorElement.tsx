import * as React from 'react';
import { RenderElementProps } from 'slate-react';

export const ColorElement: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (element.type === 'color' && element.color) {
    const color = element.color;
    return (
      <span
        {...attributes}
        style={{ color: `rgba(${color.r},${color.g},${color.b},${color.a})` }}
      >
        {children}
      </span>
    );
  }
  return null;
};
