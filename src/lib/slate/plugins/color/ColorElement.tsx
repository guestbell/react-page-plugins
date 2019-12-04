import * as React from 'react';
import { RenderElementProps } from 'slate-react';
import { ColorType } from './withColors';

export const ColorElement: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (element.type === ColorType && element.color) {
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
