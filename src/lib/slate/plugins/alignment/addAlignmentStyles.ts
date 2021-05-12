import { Element } from 'slate';
import React from 'react';
import classnames from 'classnames';

export const addAlignmentStyles = (element: Element, children: JSX.Element) => {
  const { alignment } = element;
  if (!alignment) {
    return children;
  }
  return React.cloneElement(children, {
    className: classnames(
      children && children.props && children.props.className,
      `block-alignment-${alignment}`
    ),
  });
};
