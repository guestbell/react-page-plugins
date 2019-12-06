import { Element } from 'slate';
import React from 'react';
import { FontSizePluginConfig } from './fontSizeConfig';

export const addFontSizeStyles = (
  config: FontSizePluginConfig,
  element: Element,
  children: JSX.Element
) => {
  const { fontSize } = element;
  if (!fontSize) {
    return children;
  }
  return React.cloneElement(children, {
    style: {
      ...(children && children.props && children.props.style),
      fontSize:
        (config.fontSizesStyle && config.fontSizesStyle[fontSize]) || fontSize,
    },
  });
};
