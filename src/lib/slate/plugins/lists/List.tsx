import * as React from 'react';
import { Element, Text } from 'slate';
import { RenderElementProps } from 'slate-react';
import { ListTypes } from './listTypes';

const getFirstColor = (item: Element | Text) =>
  (item as Element)?.children?.[0]
    ? getFirstColor((item as Element)?.children?.[0])
    : (item as Text).color;

export const List: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (
    element.type === ListTypes.UL ||
    element.type === ListTypes.OL ||
    element.type === ListTypes.LI
  ) {
    const color = getFirstColor(element);
    const colorStyle = color
      ? `rgba(${color.r},${color.g},${color.b},${color.a})`
      : 'inherit';
    const style = {
      textAlign: element.alignment,
      '--marker-color': colorStyle,
    };
    switch (element.type) {
      case ListTypes.UL:
        return (
          <ul {...attributes} style={style}>
            {children}
          </ul>
        );
      case ListTypes.OL:
        return (
          <ol {...attributes} style={style}>
            {children}
          </ol>
        );
      case ListTypes.LI:
        return <li {...attributes}>{children}</li>;
      default:
        return null;
    }
  }
  return null;
};
