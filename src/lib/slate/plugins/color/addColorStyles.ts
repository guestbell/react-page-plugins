import React from 'react';
import { Text } from 'slate';

export const addColorStyles = (element: Text, children: JSX.Element) => {
  const { color } = element;
  if (!color) {
    return children;
  }
  return (
    children &&
    React.cloneElement(children, {
      style: {
        ...(children && children.props && children.props.style),
        color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
      },
    })
  );
};
